const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const usermodel = require("./models/user");
const { create } = require("domain");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", (req, res) => {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let createdUser = await usermodel.create({
        username,
        email,
        password: hash,
        age,
      });

      let token = jwt.sign({ email: email }, "log");
      res.cookie("token", token);
      res.send(createdUser);
    });
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  let user = await usermodel.findOne({ username: req.body.username });
  if (!user) return res.send("Something went Wrong");

  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (result){
      let token = jwt.sign({ username: user.username }, "log");
      res.cookie("token", token);
      res.send("yes, u can login");
    } 
    else return res.send("No, u cannot login");
  });
});

// app.get('/', (req,res)=> {
// res.cookie("name", "harsh")
//     res.send("done")
// })

// salt ka meanig kuch bss random string hota hain
// app.get("/", (req, res) => {
//   // this is encryption part
//   bcrypt.genSalt(10, function (err, salt) {
//     bcrypt.hash("aritcuno", salt, function (err, hash) {
//       // Store hash in your password DB.
//       console.log(hash);
//     });
//   });
// });

// app.get("/check", (req, res) => {
//   bcrypt.compare(
//     "aritcuno",
//     "$2b$10$aDJo3vopnFyRFyBwWztVVOjgwz7QInxC2URMc0YER26IILkXu9TLO",
//     function (err, result) {
//       if (result === true) {
//         res.send("Password matches!");
//       } else {
//         res.send("Password does not match");
//       }
//       console.log(result);

//     },
//   );
// });

// app.get('/',(req,res)=> {
//     const token = jwt.sign({email: "amit@example.com"}, "secret")
//     res.cookie("token", token)
//     res.send("done")

// })

app.listen(3000);
