import WAT from "@/models/wat.model";
import { connectdb } from "@/utils/mongoose.utils";

const handler = async (req, res) => {
  try {
    await connectdb();
    const input = await req.body.formData;

     const wat = await WAT.findOne({ wat: input });

     if (!wat) {
      const save = await WAT.create({ wat: input });

       res.json({
         message: "WAT saved successfully",
         data: save,
       });
     } else {
       res.json({
         message: "WAT already exists",
       });
    }}
  catch (error) {
    console.error("Some error in backend/db", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
