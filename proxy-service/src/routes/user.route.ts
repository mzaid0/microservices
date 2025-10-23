import { Router } from "express";
import axios from "axios";

const router = Router();

interface Body {
    name: string
    email: string
    password: string
}

router.route("/register").post(async (req, res) => {

    const { name, email, password } = req.body as Body

    try {

        console.log("Forwarded req...")
        const user = await axios.post("http://localhost:4000/api/auth/register", { name, email, password });
        res.json(user.data);

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;