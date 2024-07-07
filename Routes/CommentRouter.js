const express = require("express");
let router = express.Router();
const commentAPIHandler = require("../Handlers/CommentHandler");

// Routes
router.get("/", commentAPIHandler.getListOfComments);
router.get("/:id", commentAPIHandler.getCommentById);
router.post("/", commentAPIHandler.createNewComment);
router.put("/:id", commentAPIHandler.updateComment);
router.delete("/:id", commentAPIHandler.deleteComment);

// Export API routes
module.exports = router;
