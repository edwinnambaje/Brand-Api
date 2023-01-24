const Post=require('../models/Posts');

exports.creatPost=async(req,res)=>{
    const newPost=new Post(req.body);
    try {
        const savePost=await newPost.save();
        res.status(200).json(savePost);
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.updatPost=async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try {
                const updatedPost=await Post.findByIdAndUpdate(req.params.id,{
                    $set:req.body
                },{new:true})
                res.status(200).json(updatedPost);
            } catch (error) {
                res.status(401).json(error)
            }
        }
        else{
            res.status(500).json("Update only your post")
        }
    } catch (error) {
        res.status(401).json(error)
    }
}
exports.deletPost=async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try {
                await post.delete();
                res.status(200).json("Post has been deleted");
            } catch (error) {
                res.status(401).json(error)
            }
        }
        else{
            res.status(500).json("Delete only your posts")
        }
    } catch (error) {
        res.status(401).json(error)
    }
}
exports.gettPost=async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
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
            posts=await Post.find();
        }
        res.status(200).json(posts); 
    } 
    catch (error) {
        res.status(401).json(error);
    }
}