export interface ResponseBody {
    success: boolean
    message: string
    user: {
        id: string
        name: string | null
        email: string
    }
}

