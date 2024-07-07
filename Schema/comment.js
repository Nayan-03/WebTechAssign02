// Model of Comment
const mongoose = require("mongoose");

const commentModel = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  rating: Number,
  images: [String],
  text: String,
});

const Comment = mongoose.model("Comment", commentModel);

module.exports = Comment;
