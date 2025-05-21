import WAT from "@/models/wat.model";



  const handler =async(req, res)=>{
    try {
      await connectdb();
      const number = req.body.details;
      const num = parseInt(number)
      console.log(number);
      const data = await WAT.aggregate([{ $sample: { size: num } }]).exec();         
      
           res.json({
            data
            })

      
    } catch (error) {
      console.log(error)
    }
  }
  export default handler;


