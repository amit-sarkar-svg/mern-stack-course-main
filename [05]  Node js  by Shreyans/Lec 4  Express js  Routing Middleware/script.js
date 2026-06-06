import express from "express";
const app = express();

// middleware
app.use((req, res, next) => {
  // ye request aage forward jab next ka hi use ho
  console.log("Middleware chalao");
  next();
}); // kisi bhi route se pehele ye chalega


// routes creating & handling
app.get("/", (req, res) => {
  res.send("you are a champ");
});
app.get("/haal", (req, res) => {
  res.send("kya haal hain ");
});
app.listen(3000);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something-broke!");
});
