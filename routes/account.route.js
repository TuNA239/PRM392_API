import express from 'express';
import AccountController from '../controllers/account.controller.js';

const accountsRouter = express.Router();

accountsRouter.post('/register', AccountController.register);
accountsRouter.post('/login', AccountController.login);
accountsRouter.get('/:id', AccountController.getById);

export default accountsRouter;