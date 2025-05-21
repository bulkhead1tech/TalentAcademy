import Transaction from "@/models/Transaction.model"
import { connectdb } from "@/utils/mongoose.utils";
const handler =async (req, res)=>{
    try {
        await connectdb();
        const data= await Transaction.find();
        res.send(data)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
}
export default handler;
