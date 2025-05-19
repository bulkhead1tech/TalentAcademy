import SRT  from "@/models/items.model"

const handler =async (req, res)=>{
    try {
        const data = await req.body.formData;
        const srt = await SRT.findOne({srt:data})

        if(srt){
            res.json({
                message: "SRT already found",
            });
        }
        else{
            const newsrt = await SRT.create({srt:data})
            res.json({
                message: "created successfully",
            });
        }
        
    } catch (error) {
        console.log(error)
    }
        



}
export default handler;
