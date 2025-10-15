import { Request, Response } from "express"
import { productDb } from "../../config/db"

interface GetProductResponse {
    success: boolean
    message: string
    product?: {
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
    }
}

export const getProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params

        if (!id) {
            res.status(400).json({
                success: false,
                message: "Product ID is required"
            })
            return
        }

        const product = await productDb.product.findUnique({
            where: { id },
            include: {
                category: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })

        if (!product) {
            res.status(404).json({
                success: false,
                message: "Product not found"
            })
            return
        }

        const responseBody: GetProductResponse = {
            success: true,
            message: "Product retrieved successfully",
            product
        }

        res.status(200).json(responseBody)

    } catch (error) {
        console.log(error)
        res.status(500).json({ 
            success: false,
            message: "Failed to retrieve product" 
        })
    }
}