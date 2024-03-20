import OrderRepository from "../repositories/order.repository.js";

const OrderController = {
    addOrder: async (req, res) => {
        try {
            const order = await OrderRepository.addOrder(req.body);
            res.status(201).json(order);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    filterOrders: async (req, res) => {
        try {
            const orders = await OrderRepository.filterOrders(req.query);
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json(error);
        }
    },
};
export default OrderController;