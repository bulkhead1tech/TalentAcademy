import { connectdb } from "@/utils/mongoose.utils"

const handler =async (req, res)=>{
    try {
        await connectdb();
   
        
        
    } catch (error) {
        console.log(error)
    }
        



}
export default handler;
