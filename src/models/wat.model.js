import mongoose from "mongoose";

const wat = mongoose.Schema({
        wat: {
            type: String,
            required: true,
        },
}, {collection: 'WAT'});
mongoose.models={};
const WAT =  mongoose.model('WAT', wat);
export default WAT;