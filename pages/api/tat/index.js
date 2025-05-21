import TAT from "@/models/tat.model";
import { connectdb } from "@/utils/mongoose.utils";
const handler =async (req, res)=>{
    try {
        await connectdb();
        const number = req.body.count;
        const num = parseInt(number);
        const data = await TAT.aggregate([{ $sample: { size: num } }]).exec();
        res.json({data})         

    } catch (error) {
        console.log(error)
    }

}
export default handler;
