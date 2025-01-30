import mongoose from "mongoose";

const user = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    qualifications: {
        type: String},
    age:{
        type: Number,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address:{
        type: String,
    },
    college:{
        type: String,
    },
 
}, {collection: "users"})

mongoose.models={};
const User = mongoose.model('User', user);
export default User;
