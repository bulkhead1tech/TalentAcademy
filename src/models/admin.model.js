import mongoose from "mongoose";

const admin = mongoose.Schema({
    name: {
        type: String,
    },
    password:{
        type: String,
    }
})

const Admin = mongoose.model("Admin", Admin, Admin)
export default Admin