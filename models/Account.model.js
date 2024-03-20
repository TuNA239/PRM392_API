import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";

const accountSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        // validate: {
        //     validator: (value) => value.length >= 4,
        //     message: 'Length of username must be at least 4 characters'
        // }
    },
    email:{
        type: String,
        require: true,
        // validate: {
        //     validator: (value) => isEmail,
        //     message: 'Incorrect email format'
        // }
    },
    password:{
        type: String,
        require: true,
        // validate: {
        //     validator: (value) => value.length >= 8,
        //     message: 'Length of password must be at least 8 characters'
        // }
    },
    address:{
        type: String,
        require: true,
        message: 'Address must be provided'
    },
    phone:{
        type: String,
        require: true,
        message: 'Phone must be provided'
    },
});
let Account = mongoose.model('Account', accountSchema);
export default Account;