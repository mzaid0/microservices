import { Router } from 'express'
import { createProduct } from '../controllers/product/createProduct'
import { deleteProduct } from '../controllers/product/deleteProduct'
import { getAllProducts } from '../controllers/product/getAllProducts'
import { getProduct } from '../controllers/product/getProduct'
import { updateProduct } from '../controllers/product/updateProduct'
import { validateBody } from '../middleware/validator'
import { validator } from '../validator'

const router = Router()

router.post('/products', validateBody(validator.productSchema), createProduct)
router.get('/products', getAllProducts)
router.get('/products/:id', getProduct)
router.put('/products/:id', validateBody(validator.productSchema), updateProduct)
router.delete('/products/:id', deleteProduct)

export default router