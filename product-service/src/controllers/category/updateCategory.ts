import { Request, Response } from "express"
import { productDb } from "../../config/db"
import { Validator } from "../../validator"

export const updateCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const { name } = req.body as Validator["category"]

        if (!id) {
            res.status(400).json({
                success: false,
                message: "Category ID is required"
            })
            return
        }

        const existingCategory = await productDb.category.findUnique({
            where: { id }
        })

        if (!existingCategory) {
            res.status(404).json({
                success: false,
                message: "Category not found"
            })
            return
        }

        const duplicateCategory = await productDb.category.findFirst({
            where: {
                name: {
                    equals: name.trim(),
                    mode: 'insensitive'
                },
                id: {
                    not: id
                }
            }
        })

        if (duplicateCategory) {
            res.status(400).json({
                success: false,
                message: "Category with this name already exists"
            })
            return
        }

        const updatedCategory = await productDb.category.update({
            where: { id },
            data: { name: name.trim() }
        })

        const responseBody: UpdateCategoryResponse = {
            success: true,
            message: "Category updated successfully",
            category: updatedCategory
        }

        res.status(200).json(responseBody)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Failed to update category"
        })
    }
}

interface UpdateCategoryResponse {
    success: boolean
    message: string
    category?: {
        id: string
        name: string
        createdAt: Date
        updatedAt: Date
    }
}