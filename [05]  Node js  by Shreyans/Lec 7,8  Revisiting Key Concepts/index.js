const express = require("express");
const path = require("path");
const fs = require("fs");
const { log } = require("console");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    console.log(files);
    //                           |---> ye uper ka files ka data key mein jayega
    res.render("index", { files: files });
    //                   ^^^is naam se views mein data behja hain
  });
});

app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    res.render("index", { files: files });
  });
});
app.get("/files/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    res.render("show", { filename: req.params.filename, filedata: filedata });
  });
});

app.get("/edit/:filename", (req, res) => {
  res.render("edit", { filename: req.params.filename });
});
app.post("/edit", (req, res) => {
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`,(err) => {
      res.redirect("/");
    });
});

app.post("/create", (req, res) => {
  // console.log(req.body);
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    (err) => {
      res.redirect("/");
    },
  );
});

app.listen(3000);
