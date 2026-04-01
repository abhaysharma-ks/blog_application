const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { addComment, getComments } = require("../controllers/commentController");
const router = express.Router();


// Add comment (or reply)
router.post("/addcomment", authMiddleware, addComment);

// Get comments for a blog
router.get("/:blog_id", getComments);

module.exports = router;