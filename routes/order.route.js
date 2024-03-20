import express from "express";
import OrderController from "../controllers/order.controller.js";

const ordersRouter = express.Router();

ordersRouter.post("/", OrderController.addOrder);
ordersRouter.get("/", OrderController.filterOrders);

export default ordersRouter;