import Order from "../models/Order.model.js";
import Account from "../models/Account.model.js";
import Shipping from "../models/ShippingDelivery.model.js";

const OrderRepository = {
    addOrder : async (order) => {
        const account = await Account.findById(order.account);
        const shipping = await Shipping.findById(order.shipping);
        const newOrder = new Order({
            status: "PENDING",
            account: account._id,
            products: order.products,
            shipping: shipping
        });
        return await newOrder.save();
    },
    filterOrders: async (filter) => {
        const {accountId} = filter;
        return await Order.find({account: accountId}).populate("account");
    }
};
export default OrderRepository;