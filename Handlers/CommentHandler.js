// Comment API
const Comment = require('../Schema/comment');

// GET
exports.getListOfComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        if (comments.length === 0) {
            return res.status(404).json({ message: 'There are no comments' });
        }
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET 
exports.getCommentById = async (req, res) => {
    try {
        const commentId = req.params.id || req.query.id;
        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({ message: 'Required comment not founded in database!!' });
        }
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// CREATE
exports.createNewComment = async (req, res) => {
    const comment = new Comment({
        productId: req.body.productId,
        userId: req.body.userId,
        rating: req.body.rating,
        images: req.body.images,
        text: req.body.text
    });

    try {
        const newComment = await comment.save();
        res.status(201).json({ message: 'Comment added successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    
};

// UPDATE
exports.updateComment = async (req, res) => {
    try {
        const updateExistingComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateExistingComment) {
            return res.status(404).json({ message: 'There is no comment' });
        }
        res.status(200).json({ message: 'Comment updated successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// DELETE 
exports.deleteComment = async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        if (!deletedComment) {
            return res.status(404).json({ message: 'There is no comment' });
        }
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
