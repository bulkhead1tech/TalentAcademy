import WAT from "@/models/wat.model";

const handler = async (req, res) => {
  try {
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
