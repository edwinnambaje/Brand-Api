const router=require('express').Router();
const User=require('../models/User');
const bcrypt=require('bcrypt');
const jwt=require('../helpers/jwt');
const {validate}=require('../middleware/validate');
const {loginSchema,registerSchema}=require('../validation/userSchema')
router.post('/register',validate(registerSchema),async(req,res)=>{
    try {
      const salt=await bcrypt.genSalt(10);
      const hashedPassword=await bcrypt.hash(req.body.password,salt);
      const user=new User({
          username:req.body.username,
          email:req.body.email,
          password:hashedPassword,
      })
      await user.save();
      return res.status(200).json({status:"success",message:"User created successfully", data:user})
      } catch (error) {
        res.status(400).json({status:"fail", error: error.message });
      }
})
router.post('/login',validate(loginSchema),async(req,res)=>{
    try {
      const user=await User.findOne({email:req.body.email});
      console.log(user)
        if(!user) return res.status(401).json({status:"fail",error:"Invalid credentials" });
        const match = await bcrypt.compare(req.body.password,user.password);
        if(!match){
          res.status(401).json({status:"fail",error:"Invalid password" });
        }
        const accessToken = jwt.sign({id:user._id,role:user.role})
        res.status(200).json({status:"success",data:user,token:accessToken});
      } catch (error) {
        res.status(401).json({status:"fail", error: error.message });
      }
    })
module.exports=router;