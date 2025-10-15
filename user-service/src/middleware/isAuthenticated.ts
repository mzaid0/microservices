import { User } from "../../prisma/generated";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {

    try {

        const accessToken = req.cookies.accessToken;

        if (!accessToken) {
            res.status(401).json({
                success: false,
                message: "Access token is not present",
            });
            return
        }

        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET as string) as User;

        req.user = decoded;

        next();

    } catch (error) {
        console.log(error)
        res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
        return
    }
};