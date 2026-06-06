const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    username: "Miti",
    age: 24,
    email: "miti@yahoo.com",
  });
  res.send(createdUser);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postdata: "Hey there how are you all",
    user: "6a205cb90651d3e838f7db80",
  });

  let user = await userModel.findOne({ _id: "6a205cb90651d3e838f7db80" });
  user.posts.push(post._id);
  await user.save();
  res.send({ post, user });
});

app.listen(3000);
