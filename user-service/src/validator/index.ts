import { loginSchema, LoginUser, registerSchema, RegisterUser } from "./auth-validator"

export type Validator = {
    RegisterUser: RegisterUser
    LoginUser: LoginUser
}

export const validator = {
    registerSchema,
    loginSchema,
}