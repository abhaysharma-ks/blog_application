const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { approveBlog, getApprovedBlogs, generateBlog, edit_blog, del_blog } = require("../controllers/blogController");
const roleMiddleware = require("../middlewares/roleMiddleware");
const router = express.Router();

// Create blog (user)
router.post("/create", authMiddleware, generateBlog);

// Approve blog (admin only)
router.patch("/approve/:id", authMiddleware, roleMiddleware("admin"), approveBlog);

// Public route (no auth needed)
router.get("/approved", getApprovedBlogs);

// edit blog
router.post("/edit", authMiddleware, edit_blog)

// delete blog
router.delete("/delete",authMiddleware, del_blog)

module.exports = router;