import mongoose from "mongoose";

const attendance = mongoose.Schema({
      user: {
        type: String,
        required: true,
        },
      date: {
          type: String,
          required: true
        }

}, {collection: "attendances"});
mongoose.models= {};
const Attendance = mongoose.model('Attendance', attendance);
export default Attendance