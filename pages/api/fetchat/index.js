import Attendance from "@/models/Attendance.model";

const handler =async (req, res)=>{
    try {
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
