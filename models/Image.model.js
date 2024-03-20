import mongoose, {Schema} from "mongoose";
import AutoIncrement from "mongoose-sequence";

const imageSchema = new mongoose.Schema({
    url: {
        type: String
    },
    caption: {
        type: String
    },
    path: {
        type: String
    }
});

let Image = mongoose.model('Image', imageSchema);
export default Image;