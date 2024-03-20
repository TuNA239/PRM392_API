import express from 'express';
import ShippingController from '../controllers/shipping.controller.js';

const shippingRouter = express.Router();

shippingRouter.post('/', ShippingController.addShipping);
shippingRouter.get('/', ShippingController.getAll);

export default shippingRouter;