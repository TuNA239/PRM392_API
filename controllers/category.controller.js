import CategoryRepository from "../repositories/category.repository.js";

const CategoryController = {
    addCategory: async (req, res) => {
        try {
            const category = await CategoryRepository.addCategory(req.body);
            res.status(201).json(category);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const categories = await CategoryRepository.getAll();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getById: async (req, res) => {
        try {
            const category = await CategoryRepository.getById(req.params.id);
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json(error);
        }
    },
};
export default CategoryController;