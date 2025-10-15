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

        // Check if product exists
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

        // Validate price if provided
        if (price !== undefined && price <= 0) {
            res.status(400).json({
                success: false,
                message: "Price must be greater than 0"
            })
            return
        }

        // Check if category exists if categoryId is provided
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

        // Build update data object
        const updateData: Partial<UpdateProductBody> = {}
        if (name !== undefined) updateData.name = name
        if (description !== undefined) updateData.description = description
        if (price !== undefined) updateData.price = price
        if (categoryId !== undefined) updateData.categoryId = categoryId

        // Check if there's actually something to update
        if (Object.keys(updateData).length === 0) {
            res.status(400).json({
                success: false,
                message: "No fields provided for update"
            })
            return
        }

        const updatedProduct = await productDb.product.update({
            where: { id },
            data: updateData
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