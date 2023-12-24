import express, { Request, Response } from 'express';
import ProductController from '../controller/ProductController';

const router = express.Router();

router.get('/products', ProductController.ProductList);
router.get('/products/:id', ProductController.ProductById);
router.post('/products', ProductController.AddNewProduct);
router.delete('/products/:id', ProductController.DeleteProductById);

export default router