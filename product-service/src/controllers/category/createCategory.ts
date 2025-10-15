import { Request, Response } from "express"
import { productDb } from "../../config/db"

interface CreateCategoryBody {
    name: string
}

interface CreateCategoryResponse {
    success: boolean
    message: string
    category?: {
        id: string
        name: string
        createdAt: Date
        updatedAt: Date
    }
}

export const createCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.body as CreateCategoryBody

        if (!name) {
            res.status(400).json({
                success: false,
                message: "Category name is required"
            })
            return
        }

        const existingCategory = await productDb.category.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: 'insensitive'
                }
            }
        })

        if (existingCategory) {
            res.status(400).json({
                success: false,
                message: "Category already exists"
            })
            return
        }

        const category = await productDb.category.create({
            data: { name }
        })

        const responseBody: CreateCategoryResponse = {
            success: true,
            message: "Category created successfully",
            category
        }

        res.status(201).json(responseBody)

    } catch (error) {
        console.log(error)
        res.status(500).json({ 
            success: false,
            message: "Failed to create category" 
        })
    }
}