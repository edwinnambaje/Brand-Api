const mongoose=require('mongoose');

const CommentSchema=new mongoose.Schema({
    // postID:{
    //     type: String,
    //     required: [true, 'the comment must be referenced to the article']
    // },
    name:{
        type: String,
        required: [true, 'the name field is required']
    },
    comment:{
        type: String,
        required: [true, 'there must be the comment content']
    }
})

module.exports=mongoose.model('Comment',CommentSchema);