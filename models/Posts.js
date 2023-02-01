const mongoose=require('mongoose');

const PostSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
    },
    image: {
        type: String,
    },
    likes: { 
        type:Number, 
        default:0
    },
    comments:[{
        text:String
    }],
},{
    timestamps:true}
);
module.exports=mongoose.model('Post',PostSchema);