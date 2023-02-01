const mongoose = require("mongoose");

const comment_schema = new mongoose.Schema({
  name: {
    type: String,
    required: "Content is Required"
  },
  comment: {
    type: String,
    required: "Content is Required"
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Posts",
    required: "Post is Required Field"
  }
});

module.exports = mongoose.model("Comment", comment_schema);