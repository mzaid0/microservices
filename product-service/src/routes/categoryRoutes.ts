import { Router } from 'express'
import { createCategory } from '../controllers/category/createCategory'
import { getAllCategories } from '../controllers/category/getAllCategories'
import { getCategory } from '../controllers/category/getCategory'
import { updateCategory } from '../controllers/category/updateCategory'
import { deleteCategory } from '../controllers/category/deleteCategory'

const router = Router()

router.post('/categories', createCategory)
router.get('/categories', getAllCategories)
router.get('/categories/:id', getCategory)
router.put('/categories/:id', updateCategory)
router.delete('/categories/:id', deleteCategory)

export default router