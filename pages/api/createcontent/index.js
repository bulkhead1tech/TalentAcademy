import Content  from "@/models/Topics.model"
import { connectdb } from "@/utils/mongoose.utils";

const handler =async (req, res)=>{

    try {
        await connectdb();
        if(req.method==="POST"){
            const {name, date} = await req.body.formData;
        const file = await req.body.fileUrl;
        const filer = await Content.findOne({file:file})
   
        if(filer){
            res.json({
                message: "file already found",
            });
        }
        else{
            const newsrt = await Content.create({name, date, file})
            res.json({
                message: "saved successfully",
            });
        }
        }
        else if(req.method==="GET"){
            const filer = await Content.find()
            res.json({
                data: filer,

            })

        }
        
    } catch (error) {
        console.log(error)
    }
        



}
export default handler;
