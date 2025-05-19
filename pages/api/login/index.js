import Admin from "@/models/admin.model"

const handler = async (req, res) => {
    try {
        const {name, password} = req.body;
        const admin = await Admin.find({name: name, password:password});

        if(admin){
        res.send({
            data: admin.name,
            message:"logged in",
        })
        }
       else{
        const data = await User.find({name: name, password:password});
        res.send({
            message: "Admin not found",
        
        })
       
       } 
        } catch (error) {
            res.send({
                message: "some error",
            })
        }
    }

export default handler;
