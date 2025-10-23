import { Router } from "express";
import axios from "axios";
import { validator, type Validator } from "microservices-shared";
import { ZodError } from "zod";

const router = Router();

router.route("/register").post(async (req, res) => {

    try {
        // Validate the request body using shared validator
        const validatedData = validator.registerSchema.parse(req.body) as Validator['RegisterUser'];
        const { name, email, password } = validatedData;

        console.log("Forwarded req...")
        const user = await axios.post("http://localhost:4000/api/auth/register", { name, email, password });
        res.json(user.data);

    } catch (error: unknown) {
        console.log(error);
        
        // Handle Zod validation errors
        if (error instanceof ZodError) {
            return res.status(400).json({ 
                error: "Validation Error", 
                details: error.issues 
            });
        }
        
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.route("/login").post(async (req, res) => {

    try {
        // Validate the request body using shared login validator
        const validatedData = validator.loginSchema.parse(req.body) as Validator['LoginUser'];
        const { email, password } = validatedData;

        console.log("Forwarded login req...")
        const user = await axios.post("http://localhost:4000/api/auth/login", { email, password });
        res.json(user.data);

    } catch (error: unknown) {
        console.log(error);
        
        // Handle Zod validation errors
        if (error instanceof ZodError) {
            return res.status(400).json({ 
                error: "Validation Error", 
                details: error.issues 
            });
        }
        
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;