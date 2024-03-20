import express from 'express';
import ProductController from '../controllers/product.controller.js';

const productsRouter = express.Router();
productsRouter.post('/', ProductController.addProduct);
productsRouter.get('/', ProductController.filterProducts);
productsRouter.get('/:id', ProductController.getById);


export default productsRouter;