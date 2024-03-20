import ProductRepository from "../repositories/product.repository.js";

const ProductController = {
    addProduct: async (req, res) => {
        try {
            const product = await ProductRepository.addProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    filterProducts: async (req, res) => {
        try {
            const products = await ProductRepository.filterProducts(req.query);
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getById: async (req, res) => {
        try {
            const product = await ProductRepository.getById(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default ProductController;