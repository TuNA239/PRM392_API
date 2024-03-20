import Shipping from "../models/ShippingDelivery.model.js";

const ShippingRepository = {
    addShipping: async (shipping) => {
        const newShipping = new Shipping(shipping);
        return await newShipping.save();
    },
    getAll: async () => {
        return await Shipping.find();
    },
};
export default ShippingRepository;