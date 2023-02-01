
const Posts=require('../models/Posts');
const Comment=require('../models/Comment');
exports.postComment = async (req, res) => {
    try {
        const comment = {
            text:req.body.text
        }
        const post = await Posts.findOne({_id: req.params.id });
        if (!post) {
        res.status(500).json({message:"Post not found"})       
        }
        Posts.findByIdAndUpdate(req.body.postId,{
            $push:{comments:comment}
        },{
            new:true
        })
        // await Posts.updateOne({_id: post._id},{
        //     comments:[...post.comments,req.body]
        // })
        res.status(200).json({message:'Commented'})
    }catch (err) {
      res.status(500).json({message:"edwin"})
    }
}
