import { Request, Response } from "express"
import { productDb } from "../../config/db"

interface CreateProductBody {
    name: string
    description?: string
    price: number
    categoryId?: string
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

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description, price, categoryId } = req.body as CreateProductBody

        if (!name || !price) {
            res.status(400).json({
                success: false,
                message: "Name and price are required"
            })
            return
        }

        if (price <= 0) {
            res.status(400).json({
                success: false,
                message: "Price must be greater than 0"
            })
            return
        }

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