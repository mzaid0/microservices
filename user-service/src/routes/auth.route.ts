import { Router } from "express"
import { registerUser } from "../controllers/registerUser"
import { loginUser } from "../controllers/loginUser"
import { refreshAccessToken } from "../controllers/refreshAccessToken"
import { logoutUser } from "../controllers/logoutUser"
import { validateBody } from "../middleware/validator"
import { validator } from "microservices-shared"


const router = Router()

router.route("/register").post(validateBody(validator.registerSchema), registerUser)
router.route("/login").post(validateBody(validator.loginSchema), loginUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/logout").post(logoutUser)

export default router