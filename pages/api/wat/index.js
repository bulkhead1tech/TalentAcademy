import WAT from "@/models/wat.model";



  // export async function  GET(req, res) {
  //   try {
  //     await connectdb();
  //     const data = await WAT.aggregate([{ $sample: { size: num } }]).exec();
  //     res.status(200).json(data);
  //     console.log(data)
    
     
  //     } catch (error) {
  //       res.status(500).json({ error: 'Failed to fetch data' });
  //     }}

  const handler =async(req, res)=>{
    try {
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


