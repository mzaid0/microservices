import { z } from "zod";

export const registerSchema = z.object({
    id: z.string().uuid(),
    email: z.string().email({ message: "Invalid email address" }),
    name: z.string().optional().nullable(),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

export type RegisterUser = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

export type LoginUser = z.infer<typeof loginSchema>;
