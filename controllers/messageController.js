const Message=require('../models/Message');


exports.creatMessage=async(req,res)=>{
    const newMessage=new Message(req.body);
    try {
        const saveMessage=await newMessage.save();
        res.status(200).json(saveMessage);
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.gettOne=async(req,res)=>{
    try {
        const message=await Message.findById(req.params.id);
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.gettAll=async(req,res)=>{
    const username=req.query.user;
    try {
        let messages;
        if(username){
            messages=await Message.find({username});
        }
        else{
            messages=await Message.find();
        }
        res.status(200).json(messages); 
    } 
    catch (error) {
        res.status(401).json(error);
    }
}