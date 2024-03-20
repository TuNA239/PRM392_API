import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";
const orderSchema = new mongoose.Schema({
    status: String,
    products: [
        {
            name: String,
            price: Number,
            color: String,
            size: String,
            orderNumber: Number,
        },
    ],
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
        // required: true,
    },
    shipping: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shipping",
        // required: false
    }
});

let Order = mongoose.model('Order', orderSchema);
export default Order;