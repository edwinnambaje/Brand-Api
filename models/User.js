const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    role:{
        type:String,
        default:'user'
    },
    posts: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts"
     }]
},{
    timestamps:true}
);

module.exports=mongoose.model('User',UserSchema);