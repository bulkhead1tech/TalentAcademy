import mongoose from "mongoose";

const srt = mongoose.Schema({
    srt: {
        type: String,
        required: true,
    },
}, {collection: 'SRT'});
mongoose.models={};
 const SRT =  mongoose.model('SRT', srt);

 export default  SRT
