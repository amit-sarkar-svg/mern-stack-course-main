const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const mongoose = require("mongoose");
const ownerRouter = require("./routes/ownersRouter");
const userRouter = require("./routes/usersRouter");
const productRouter = require("./routes/productsRouter");

const db = require("./config/mongoose-connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", ownerRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(3000);
