import Product from "../models/Product.model.js";
import Image from "../models/Image.model.js";
import Category from "../models/Category.model.js";

const ProductRepository = {
    addProduct: async ({ name, price, images = [], colors = [], sizes = [], quantity, category }) => {
        return await Category.findOne({ name: category }).then(docCategory => {
            Product.create({ name, price, colors, sizes, quantity, category: docCategory._id }).then(docProduct => {
                images.map(({ url, caption, path }) => {
                    Image.create({ url, caption, path }).then(docImage => {
                        return Product.findByIdAndUpdate(docProduct._id, {
                            $push: {
                                images: {
                                    _id: docImage._id,
                                    url: url,
                                    caption: caption,
                                    path: path
                                }
                            }
                        })
                    })
                })
            });
        })
    },
    filterProducts: async (filter) => {
        const { name, categoryId, priceFrom, priceTo } = filter;
        const query = {};
        if (name) {
            query.name = { $regex: name, $options: "i" };
        }
        if (categoryId) {
            query.category = categoryId;
        }
        if (priceFrom && priceTo) {
            query.price = { $gte: priceFrom, $lte: priceTo };
        }
        return await Product.find(query).exec();
    },
    getById: async (id) => {
        return await Product.findById(id);
    }
};
export default ProductRepository;