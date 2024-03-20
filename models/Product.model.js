import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    images: [
        {
            url: String,
            caption: String,
            path: String
        },
    ],
    colors: {
        type: Array,
        require: true,
    },
    sizes: {
        type: Array,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        // required: false
    }
});

let Product = mongoose.model('Product', productSchema);
export default Product;

