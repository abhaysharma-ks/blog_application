const express = require("express");
const router = express.Router();


const authMiddleware = require("../middlewares/authMiddleware");
const { createTag, getTags } = require("../controllers/tagController");
const { Validate } = require("../middlewares/validatorMiddleware");
const { tagSchema } = require("../validatior/tag.validation.schema");

// Admin creates tag
router.post("/addtag", authMiddleware,Validate(tagSchema), createTag);

// Get all tags (public)
router.get("/gettag/:blogId",getTags);

module.exports = router;