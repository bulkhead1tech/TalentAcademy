import Transaction from "@/models/Transaction.model"
import { connectdb } from "@/utils/mongoose.utils";
const handler = async(req, res)=>{
  try {
    await connectdb();
    const {name, date, amount, transactionType} = req.body.formData;
    await Transaction.create({name, date, amount, transactionType});
    res.json({
        message: "Transaction saved successfully",
    });

  } catch (error) {
    res.json({
        message: "Transaction creation failed"
    })
   console.log(error) 
  }
 

}
export default handler