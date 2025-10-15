import { Request, Response } from "express"
import { productDb } from "../../config/db"

interface DeleteCategoryResponse {
    success: boolean
    message: string
    deletedCategory?: {
        id: string
        name: string
    }
}

export const deleteCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params

        if (!id) {
            res.status(400).json({
                success: false,
                message: "Category ID is required"
            })
            return
        }

        // Check if category exists
        const existingCategory = await productDb.category.findUnique({
            where: { id },
            include: {
                _count: {
                    select: {
                        products: true
                    }
                }
            }
        })

        if (!existingCategory) {
            res.status(404).json({
                success: false,
                message: "Category not found"
            })
            return
        }

        // Check if category has products
        if (existingCategory._count.products > 0) {
            res.status(400).json({
                success: false,
                message: `Cannot delete category. It has ${existingCategory._count.products} product(s) associated with it. Please remove or reassign products first.`
            })
            return
        }

        // Delete the category
        await productDb.category.delete({
            where: { id }
        })

        const responseBody: DeleteCategoryResponse = {
            success: true,
            message: "Category deleted successfully",
            deletedCategory: {
                id: existingCategory.id,
                name: existingCategory.name
            }
        }

        res.status(200).json(responseBody)

    } catch (error) {
        console.log(error)
        res.status(500).json({ 
            success: false,
            message: "Failed to delete category" 
        })
    }
}