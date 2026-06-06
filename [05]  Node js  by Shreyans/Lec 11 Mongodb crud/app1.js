// Lec - 11
const express = require("express");
const app = express();

const usermodel = require("./undermodel");

app.get("/", (req, res) => {
  res.send("heyyyyyyy");
});

// we know mongoose ka asyncronous in nature toh usko baad mein chalane ke liye
// uske code mein await likhenge and uske parent mein async esa karna hota hain
app.get("/create", async (req, res) => {
  let createduser = await usermodel.create({
    name: "Lodu",
    username: "Land",
    email: "Lodu@gmail.com",
  });
  res.send(createduser);
});

app.get("/update", async (req, res) => {
  let updateduser = await usermodel.findOneAndUpdate(
    { username: "Land" },
    { name: "Land Songh" },
    { returnDocument: "after" },
  );
  res.send(updateduser);
});

app.get("/read", async (req, res) => {
  // find will give all records
  let users = await usermodel.find();
  res.send(users);
});

app.get("/delete", async (req, res) => {
  let users = await usermodel.findOneAndDelete({ username: "Land" });
  res.send(users);
});
app.listen(3000);
