import express from 'express';
import CategoryController from '../controllers/category.controller.js';

const categoriesRouter = express.Router();

categoriesRouter.post('/', CategoryController.addCategory);
categoriesRouter.get('/all', CategoryController.getAll);
categoriesRouter.get('/:id', CategoryController.getById);

export default categoriesRouter;
