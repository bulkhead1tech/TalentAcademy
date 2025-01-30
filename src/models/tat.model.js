import mongoose from "mongoose";

const tat = mongoose.Schema({
    "Public ID":{
        type: String,
        required: true,
    },
    Format:{   
        type: String,
        required: true,
    },
    URL:{ 
        type: String,
        required: true,
    }
}, {collection: "TAT"});
mongoose.models={};
const TAT = mongoose.model('TAT', tat)
export default TAT;