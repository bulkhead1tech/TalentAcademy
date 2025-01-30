import mongoose from "mongoose";

const transaction = mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
         amount: {
            type: Number,
            required: true,
        },
        transactionType: {
            type: Boolean,
            required: true,
        }


});
mongoose.models= {};
const Transaction = mongoose.model('Transaction', transaction);
export default Transaction