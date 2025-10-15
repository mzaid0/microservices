import { Request, Response } from "express"
import { productDb } from "../../config/db"

interface DeleteProductResponse {
    success: boolean
    message: string
    deletedProduct?: {
        id: string
        name: string
    }
}

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params

        if (!id) {
            res.status(400).json({
                success: false,
                message: "Product ID is required"
            })
            return
        }

        const existingProduct = await productDb.product.findUnique({
            where: { id },
            select: {
                id: true,
                name: true
            }
        })

        if (!existingProduct) {
            res.status(404).json({
                success: false,
                message: "Product not found"
            })
            return
        }

        await productDb.product.delete({
            where: { id }
        })

        const responseBody: DeleteProductResponse = {
            success: true,
            message: "Product deleted successfully",
            deletedProduct: existingProduct
        }

        res.status(200).json(responseBody)

    } catch (error) {
        console.log(error)
        res.status(500).json({ 
            success: false,
            message: "Failed to delete product" 
        })
    }
}