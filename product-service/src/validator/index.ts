import { Category, CategorySchema } from "./category-validator"
import { Product, productSchema } from "./product-validator"

export type Validator = {
    category: Category
    product: Product

}

export const validator = {
    CategorySchema,
    productSchema
}

