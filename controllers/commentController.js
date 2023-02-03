
const Post=require('../models/Posts');
const Comment=require('../models/Comment')
exports.createComment=async (req, res) => {
    //Find a POst
    const post = await Post.findById(req.params.id);

  //Create a Comment
  const comment = new Comment({
    name:req.body.name,
    comment:req.body.comment,
    post:req.params.id
  });
  await comment.save();
  // Associate Post with comment
  post.comments.push(comment);
  await post.save();
  return res.send(comment);
};