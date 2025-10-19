import { z } from "zod";

export const productSchema = z.object({
    name: z.string().min(1, { message: "Product name is required" }),
    description: z.string().optional().nullable(),
    price: z.number().positive({ message: "Price must be greater than 0" }),
    categoryId: z.string().uuid({ message: "Invalid category ID" }).optional().nullable(),
});

export type Product = z.infer<typeof productSchema>