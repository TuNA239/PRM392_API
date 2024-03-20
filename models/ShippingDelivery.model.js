import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";

const shippingSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    },
    deliveryTime: {
        type: Number,
        require: true,
    },
});
let Shipping = mongoose.model('Shipping', shippingSchema);
export default Shipping;