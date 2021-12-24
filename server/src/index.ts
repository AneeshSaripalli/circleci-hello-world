import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(80, () => {
  console.log("Listen on port 80");
});
