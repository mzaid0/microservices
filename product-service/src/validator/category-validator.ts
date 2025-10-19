import { z } from "zod";

export const CategorySchema = z.object({
    name: z.string().min(1, { message: "Category name is required" }),
});

export type Category = z.infer<typeof CategorySchema>;