import Attendance from "@/models/Attendance.model";
import { connectdb } from "@/utils/mongoose.utils";

const handler =async (req, res)=>{
    try {
        await connectdb();
        const {date} = await req.body;
         const str = date.toString();
        console.log(str)
        const att = await Attendance.find({date:{$regex: str, $options: 'i'}})

        if(att){
            res.json({
                data: att,
            });
        }
        else{
            res.json({
                data: "No attendance!",
            });
        }
        
    } catch (error) {
        console.log(error)
    }
        



}
export default handler;
