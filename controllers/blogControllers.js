const Blog = require("../models/Blog.js");

const blog_index = (req, res) => {
  Blog.find().then((result) => {
    res.render("index", { title: "All blogs", blogs: result });
  });
};

const blog_create_get = (req, res) => {
  res.render("create", { title: "Create" });
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Detail Blog" });
    })
    .catch((error) => {
      console.log(error);
    });
};

const blog_create_post = (req, res) => {
  console.log(req.body);
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((error) => {
      console.log(error);
    });
};

const blog_delete_get = (req, res) => {
  res.render("delete", { title: "Delete Blog" });
};

const blog_delete_post = (req, res) => {
  const id = req.body.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      console.log("Delete successful");
      res.redirect("/blogs");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  blog_index,
  blog_create_get,
  blog_details,
  blog_create_post,
  blog_delete_get,
  blog_delete_post,
};
