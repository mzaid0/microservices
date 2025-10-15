import { Request, Response } from "express"
import { productDb } from "../../config/db"

interface GetAllCategoriesResponse {
    success: boolean
    message: string
    categories: {
        id: string
        name: string
        createdAt: Date
        updatedAt: Date
        _count: {
            products: number
        }
    }[]
}

export const getAllCategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await productDb.category.findMany({
            include: {
                _count: {
                    select: {
                        products: true
                    }
                }
            },
            orderBy: {
                name: 'asc'
            }
        })

        const responseBody: GetAllCategoriesResponse = {
            success: true,
            message: "Categories retrieved successfully",
            categories
        }

        res.status(200).json(responseBody)

    } catch (error) {
        console.log(error)
        res.status(500).json({ 
            success: false,
            message: "Failed to retrieve categories" 
        })
    }
}