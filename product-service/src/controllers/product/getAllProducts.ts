import { Request, Response } from "express"
import { productDb } from "../../config/db"

interface GetAllProductsQuery {
    page?: string
    limit?: string
    categoryId?: string
    search?: string
}

interface GetAllProductsResponse {
    success: boolean
    message: string
    products: {
        id: string
        name: string
        description: string | null
        price: number
        categoryId: string | null
        createdAt: Date
        updatedAt: Date
        category?: {
            id: string
            name: string
        } | null
    }[]
    pagination: {
        currentPage: number
        totalPages: number
        totalProducts: number
        hasNext: boolean
        hasPrevious: boolean
    }
}

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const { page = "1", limit = "10", categoryId, search } = req.query as GetAllProductsQuery

        const pageNumber = parseInt(page)
        const limitNumber = parseInt(limit)
        const skip = (pageNumber - 1) * limitNumber

        // Build where clause
        interface WhereClause {
            categoryId?: string
            OR?: Array<{
                name?: { contains: string; mode: 'insensitive' }
                description?: { contains: string; mode: 'insensitive' }
            }>
        }

        const where: WhereClause = {}
        
        if (categoryId) {
            where.categoryId = categoryId
        }

        if (search) {
            where.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } }
            ]
        }

        // Get total count for pagination
        const totalProducts = await productDb.product.count({ where })

        // Get products
        const products = await productDb.product.findMany({
            where,
            include: {
                category: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            },
            skip,
            take: limitNumber
        })

        const totalPages = Math.ceil(totalProducts / limitNumber)

        const responseBody: GetAllProductsResponse = {
            success: true,
            message: "Products retrieved successfully",
            products,
            pagination: {
                currentPage: pageNumber,
                totalPages,
                totalProducts,
                hasNext: pageNumber < totalPages,
                hasPrevious: pageNumber > 1
            }
        }

        res.status(200).json(responseBody)

    } catch (error) {
        console.log(error)
        res.status(500).json({ 
            success: false,
            message: "Failed to retrieve products" 
        })
    }
}