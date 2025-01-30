import mongoose from "mongoose";

const content = mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        date: String,
        file: {
            type: String,
        },
}, {collection: "contents"});
mongoose.models= {}
 const Content = mongoose.model('Content', content);
 export default Content;