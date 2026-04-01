const express = require("express");
const router = express.Router();


const authMiddleware = require("../middlewares/authMiddleware");
const { createTag, getTags } = require("../controllers/tagController");

// Admin creates tag
router.post("/addtag", authMiddleware, createTag);

// Get all tags (public)
router.get("/", getTags);

module.exports = router;