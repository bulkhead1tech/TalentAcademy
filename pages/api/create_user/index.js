import { User } from "@/models/user.models"
import { connectdb } from "@/utils/mongoose.utils";
const handler =async (req,res) => {
    try {
        await connectdb();
      const {name, qualifications, age, phone,  email, address, college}= req.body.formData;
      const user = await User.findOne({name:name, email:email})
      if(!user){
        await User.create({
            name, qualifications, age, phone, email, address, college
        })
        res.json({
            message: "user created successfully"
        })
      }
      else{
        res.json({
            message: "user already exists"
        })
      }
      

        
    } catch (error) {
        console.log(data);
    }
}
export default handler