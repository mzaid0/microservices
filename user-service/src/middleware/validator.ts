import { NextFunction, Request, Response } from "express";
import { ZodError, ZodType } from "zod";

export const validateBody = (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse(req.body);
        next();

    } catch (error) {

        if (error instanceof ZodError) {
            const message = error.issues.map(issue => issue.message).join(", ");
            return res.status(400).json({
                success: false,
                message,
            });
        }

        console.error("Validation error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });

    }

}