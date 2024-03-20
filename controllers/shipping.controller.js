import ShippingRepository from "../repositories/shipping.repository.js";

const ShippingController = {
    addShipping: async (req, res) => {
        try {
            const shipping = await ShippingRepository.addShipping(req.body);
            res.status(201).json(shipping);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const shippings = await ShippingRepository.getAll();
            res.status(200).json(shippings);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};
export default ShippingController;