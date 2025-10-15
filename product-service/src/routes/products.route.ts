import { Router } from 'express'
import { createProduct } from '../controllers/product/createProduct'
import { getAllProducts } from '../controllers/product/getAllProducts'
import { getProduct } from '../controllers/product/getProduct'
import { updateProduct } from '../controllers/product/updateProduct'
import { deleteProduct } from '../controllers/product/deleteProduct'

const router = Router()

router.post('/products', createProduct)           
router.get('/products', getAllProducts)
router.get('/products/:id', getProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

export default router