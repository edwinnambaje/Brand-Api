const Post=require('../models/Posts');
const cloudinary=require("../helpers/cloudinary");

exports.creatPost=async(req,res)=>{
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const post = new Post({
            title:req.body.title,
            desc:req.body.desc,
            image:result.secure_url,
        });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.updatPost=async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        if(!post) return res.status(404).json({status:"fail",error:"The blog is not found"})
        await cloudinary.uploader.destroy(post.image);
        const result = await cloudinary.uploader.upload(req.file.path);
        const updatedBlog = await Post.findByIdAndUpdate(req.params.id,{$set:{
            title:req.body.title,
            desc:req.body.desc,
            image:result.secure_url
          }},{new:true});
          res.status(200).json({
            status:"success",
            data:updatedBlog
          });
        } catch (error) {
          res.status(500).json({status:"error", error: error.message });
        }
}
exports.deletPost=async(req,res)=>{
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({status:"success",data:null,message:"the blog deleted"});  
      } 
      catch (error) {
          res.status(401).json({status:"error",error:error.message})
      }
}
exports.gettPost=async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id)
        .populate('comments','text created');
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.gettAll=async(req,res)=>{
    const username=req.query.user;
    const catName=req.query.cat;
    try {
        let posts;
        if(username){
            posts=await Post.find({username});
        }
        else if(catName){
            posts=await Post.find({categories:{
                $in:[catName]
            }});
        }
        else{
            posts=await Post.find()
            .populate('comments','text created');
        }
        res.status(200).json(posts); 
    } 
    catch (error) {
        res.status(401).json(error);
    }
}