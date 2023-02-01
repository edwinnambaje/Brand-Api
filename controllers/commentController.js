
const Post=require('../models/Posts');
const Comment=require('../models/Comment')
exports.createComment=async (req, res) => {
    //Find a POst
    const post = await Post.findOne({ _id: req.params.id });

  //Create a Comment
  const comment = new Comment();
  comment.name = req.body.name;
  comment.comment = req.body.comment;
  comment.post = post._id;
  await comment.save();

  // Associate Post with comment
  post.comments.push(comment);
  await post.save();
  res.send(comment);
};
exports.getComment=async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id }).populate(
      "comments"
    );
    res.send(post);
}
exports.deleteComment=async (req, res) => {
    await Comment.findByIdAndRemove(req.params.id);
    res.send({ message: "Comment Successfully Deleted" });
}