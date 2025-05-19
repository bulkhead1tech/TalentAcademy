import User from "@/models/user.models"
const handler =async (req,res) => {
    try {

        
        if(req.method==="POST"){
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
      
        }
      
    
      else if(req.method==="GET"){
        
        const user = await User.find();
        res.json({
          data: user,
          message: "data fetched"
      })


        }
        
    } catch (error) {
        console.log(error);
    }
}
export default handler
