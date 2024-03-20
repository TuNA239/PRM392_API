import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    }
});

let Category = mongoose.model('Category', categorySchema);
export default Category;