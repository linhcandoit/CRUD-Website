const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const blogRoutes = require("./routes/blogRoutes");

const app = express();

app.set("view engine", "ejs");
// app.use(morgan("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// urlencoded is used for mongoose

mongoose
  .connect("mongodb://localhost:27017/myBlogs")
  .then((result) => {
    console.log("connected");
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error);
  });

// basic routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

app.get("/tuanlinh", (req, res) => {
  res.send("Toi la tuan linh day");
  console.log(res.header);
});

app.use("/blogs", blogRoutes);

app.use((req, res) => {
  res.render("404", { title: "Not Found" });
});
