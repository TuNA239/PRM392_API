
import Category from "../models/Category.model.js";

const CategoryRepository = {
    addCategory: async (category) => {
        const newCategory = new Category(category);
        return await newCategory.save();
    },
    getAll: async () => {
        return await Category.find();
    },
    getById: async (id) => {
        return await Category.findById(id);
    },
};
export default CategoryRepository;