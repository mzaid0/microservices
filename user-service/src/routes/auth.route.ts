import { Router } from "express"
import { registerUser } from "../controllers/registerUser"
import { loginUser } from "../controllers/loginUser"
import { refreshAccessToken } from "../controllers/refreshAccessToken"
import { logoutUser } from "../controllers/logoutUser"


const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/logout").post(logoutUser)

export default router