import { loginSchema, LoginUser, registerSchema, RegisterUser } from "./validators/auth-validator"


export type Validator = {
    RegisterUser: RegisterUser
    LoginUser: LoginUser
}

export const validator = {
    registerSchema,
    loginSchema,
}