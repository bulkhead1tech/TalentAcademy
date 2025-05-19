import Transaction from "@/models/Transaction.model"
const handler =async (req, res)=>{
    try {
        const data= await Transaction.find();
        res.send(data)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
}
export default handler;
