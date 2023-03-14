const express = require("express");
const blogControllers = require("../controllers/blogControllers");

const router = express.Router();

router.get("/create", blogControllers.blog_create_get);

router.get("/delete", blogControllers.blog_delete_get);

router.get("/:id", blogControllers.blog_details);

router.post("/delete", blogControllers.blog_delete_post);

router.post("/create", blogControllers.blog_create_post);

router.get("/", blogControllers.blog_index);

module.exports = router;
