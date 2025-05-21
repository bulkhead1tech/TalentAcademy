import SRT from "@/models/items.model"
import { connectdb } from "@/utils/mongoose.utils";

const handler=async(req, res)=>{
  
try {
    await connectdb();
    const number = req.body.details;
    const num = parseInt(number)
    const data = await SRT.aggregate([{ $sample: { size: num } }]).exec();         
    res.json({data})
} catch (error) {
    console.log(error)
}
}
export default handler;
