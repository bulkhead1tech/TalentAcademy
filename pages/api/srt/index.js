import SRT from "@/models/items.model"

const handler=async(req, res)=>{
  
try {
    const number = req.body.details;
    const num = parseInt(number)
    const data = await SRT.aggregate([{ $sample: { size: num } }]).exec();         
    res.json({data})
} catch (error) {
    console.log(error)
}
}
export default handler;
