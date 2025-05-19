import User from "@/models/user.models"

const handler = async (req, res) => {

    if(req.method==="GET"){
        try {
            const data = await User.find();
            res.send({
                data: data,
            })
            
        } catch (error) {
            
        }
    }
    else if(req.method==="POST"){
        
    try {
        const search = req.body.search;
        if(search===""){
            const data = await User.find();
        res.send({
            data: data,
        })
        }
       else{
        const data = await User.find({name: {$regex: search, $options: 'i'}});
        res.send({
            data: data,
        
        })
       
       } 
        } catch (error) {
            res.send({
                message: "error getting the data"
            })
        }
    }
}
export default handler;
