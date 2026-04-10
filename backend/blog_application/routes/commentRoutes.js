const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { addComment, getComments } = require("../controllers/commentController");
const { Validate } = require("../middlewares/validatorMiddleware");
const { commentSchema, getCommentSchema } = require("../validatior/comment.validator.schema");
const router = express.Router();


// Add comment (or reply)
router.post("/addcomment", authMiddleware,Validate(commentSchema),addComment);

// Get comments for a blog
router.get("/:blogId", Validate(getCommentSchema),getComments);

module.exports = router;