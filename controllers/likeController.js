
const Posts=require('../models/Posts');
exports.like = async (req, res) => {
    try {
        const post = await Posts.findOne({_id: req.params.id });
        if (!post) {
            return res.status(500).json({message:"Post not found"})       
        } 
        await Posts.updateOne({_id: post._id},{
            likes: post.likes+1
        })
        return res.status(200).json({message:'liked'})
    } catch (err) {
        res.status(400).json(err)
    }
}
exports.unlike = async (req, res) => {
    try {
        const post = await Posts.findOne({_id: req.params.id });
        if (!post) {
            return res.status(500).json({message:"Post not found"})       
        } 
        await Posts.updateOne({_id: post._id},{
            likes: post.likes-1
        })
        return res.status(200).json({message:'unliked'})
    } catch (err) {
        res.status(500).json(err)
    }
}