import Attendance from "@/models/Attendance.model";
import { connectdb } from "@/utils/mongoose.utils";
const handler =async (req, res)=>{
    try {
        await connectdb();
        
        const {user, date} = await req.body.formData;
        const att = await Attendance.findOne({user:user, date:date})

        if(att){
            res.json({
                message: "Attendance already found",
            });
        }
        else{
            await Attendance.create({user, date})
            res.json({
                message: "Attendance submitted successfully",
            });
        }
        
    } catch (error) {
        console.log(error)
    }
        



}
export default handler;
