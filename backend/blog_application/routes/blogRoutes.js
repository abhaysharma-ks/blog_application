const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { approveBlog, getApprovedBlogs, generateBlog, edit_blog, del_blog, getAllPendingBlogs, blog, userBlog } = require("../controllers/blogController");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { Validate } = require("../middlewares/validatorMiddleware");
const { blogSchema } = require("../validatior/blog.validation.schema");
const router = express.Router();

// Create blog (user)
router.post("/create", authMiddleware,Validate(blogSchema), generateBlog);

// get a blog
router.get("/blogdetail/:b_id", blog)

// Approve blog (admin only)
router.patch("/approve/:id", authMiddleware, roleMiddleware("admin"), approveBlog);

// Public route (no auth needed)
router.get("/approved", getApprovedBlogs);

// get all the routes that are not approved
router.get("/allPending",authMiddleware,roleMiddleware("admin"),getAllPendingBlogs)

// get all blogs of a particular user
router.get("/getall",authMiddleware,userBlog)

// edit blog
router.post("/edit", authMiddleware,Validate(blogSchema), edit_blog)

// delete blog
router.delete("/delete",authMiddleware, del_blog)

module.exports = router;