import { Request, Response } from "express"
import { productDb } from "../../config/db"

interface GetCategoryResponse {
    success: boolean
    message: string
    category?: {
        id: string
        name: string
        createdAt: Date
        updatedAt: Date
        products: {
            id: string
            name: string
            price: number
        }[]
        _count: {
            products: number
        }
    }
}

export const getCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params

        if (!id) {
            res.status(400).json({
                success: false,
                message: "Category ID is required"
            })
            return
        }

        const category = await productDb.category.findUnique({
            where: { id },
            include: {
                products: {
                    select: {
                        id: true,
                        name: true,
                        price: true
                    },
                    orderBy: {
                        createdAt: 'desc'
                    }
                },
                _count: {
                    select: {
                        products: true
                    }
                }
            }
        })

        if (!category) {
            res.status(404).json({
                success: false,
                message: "Category not found"
            })
            return
        }

        const responseBody: GetCategoryResponse = {
            success: true,
            message: "Category retrieved successfully",
            category
        }

        res.status(200).json(responseBody)

    } catch (error) {
        console.log(error)
        res.status(500).json({ 
            success: false,
            message: "Failed to retrieve category" 
        })
    }
}