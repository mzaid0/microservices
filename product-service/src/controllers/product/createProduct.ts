import { Request, Response } from "express"
import { productDb } from "../../config/db"
import { Validator } from "../../validator"

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description, price, categoryId } = req.body as Validator["product"]

        if (categoryId) {
            const existingCategory = await productDb.category.findUnique({
                where: { id: categoryId }
            })

            if (!existingCategory) {
                res.status(400).json({
                    success: false,
                    message: "Category not found"
                })
                return
            }
        }

        const product = await productDb.product.create({
            data: {
                name,
                description,
                price,
                categoryId
            }
        })

        const responseBody: CreateProductResponse = {
            success: true,
            message: "Product created successfully",
            product
        }

        res.status(201).json(responseBody)

    } catch (error) {
        console.log(error)
        res.status(500).json({ 
            success: false,
            message: "Failed to create product" 
        })
    }
}

interface CreateProductResponse {
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
    }
}