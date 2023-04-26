const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const catagory = require("./data/catagory.json");

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/catagory", (req, res) => {
  res.send(catagory);
});

app.listen(port, () => {
  console.log(`app is running in Port : ${port}`);
});
