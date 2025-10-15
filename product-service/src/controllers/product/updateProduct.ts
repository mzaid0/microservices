import { Request, Response } from "express"
import { productDb } from "../../config/db"

interface UpdateProductBody {
    name?: string
    description?: string
    price?: number
    categoryId?: string
}

interface UpdateProductResponse {
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

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const { name, description, price, categoryId } = req.body as UpdateProductBody

        if (!id) {
            res.status(400).json({
                success: false,
                message: "Product ID is required"
            })
            return
        }

        const existingProduct = await productDb.product.findUnique({
            where: { id }
        })

        if (!existingProduct) {
            res.status(404).json({
                success: false,
                message: "Product not found"
            })
            return
        }

        const updatedProduct = await productDb.product.update({
            where: { id },
            data: {
                name,
                description,
                price,
                categoryId
            }
        })

        const responseBody: UpdateProductResponse = {
            success: true,
            message: "Product updated successfully",
            product: updatedProduct
        }

        res.status(200).json(responseBody)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Failed to update product"
        })
    }
}