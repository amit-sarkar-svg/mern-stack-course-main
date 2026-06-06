const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, "./public/images/uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, (err, bytes) => {
      const fn = bytes.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });
  },
});
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/test", (req, res) => {
  res.render("test");
});

app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  console.log("File uploaded:", req.file);
  res.json({ message: "File uploaded successfully", file: req.file });
});

app.get("/login", (req, res) => {
  res.render("login");
});

// this is now become a protected route
// you have to login to access this route
app.get("/profile", isLoggedIn, async (req, res) => {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("posts");
  res.render("profile", { user });
});

app.get("/like/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id }).populate("user");

  if (post.likes.indexOf(req.user.userid) === -1) {
    post.likes.push(req.user.userid);
  } else {
    post.likes.splice(post.likes.indexOf(req.user.userid), 1);
  }

  await post.save();
  res.redirect("/profile");
});

app.get("/edit/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id }).populate("user");

  res.render("edit", { post });
});

app.post("/update/:id", isLoggedIn, async (req, res) => {
  let post = await postModel
    .findOneAndUpdate(
      { _id: req.params.id },
      { content: req.body.content },
      { new: true },
    )
    .populate("user");

  res.redirect("/profile", { post });
});

app.post("/edit/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOneAndUpdate(
    { _id: req.params.id },
    { content: req.body.content },
    { new: true },
  );
  await post.save();
  res.redirect("/profile");
});

app.post("/post", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  let { content } = req.body;
  let post = await postModel.create({
    user: user._id,
    content: req.body.content,
  });
  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});

app.post("/register", async (req, res) => {
  try {
    let { username, name, age, email, password } = req.body;

    let user = await userModel.findOne({ email });
    if (user) return res.status(400).send("user already exists");

    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);

    let user2 = await userModel.create({
      username,
      name,
      age,
      email,
      password: hash,
    });

    let token = jwt.sign({ email: email, userid: user2._id }, "secretkey");
    res.cookie("token", token);
    res.send("registered successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email });
  if (!user) return res.status(400).send("Something went wrong ");

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: email, userid: user._id }, "secretkey");
      res.cookie("token", token);
      res.status(200).send("login successful");
    } else res.redirect("/login");
  });
});

function isLoggedIn(req, res, next) {
  let token = req.cookies.token;
  if (!token) return res.redirect("/login");

  try {
    let data = jwt.verify(token, "secretkey");
    req.user = data;
    next();
  } catch (err) {
    res.redirect("/login");
  }
}
app.listen(3000);
