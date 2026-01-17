const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));

const items = require(path.join(__dirname, "data", "items.json"));

app.get("/", (req, res) => {
  res.send("SERVER IS WORKING");
});

app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/home-items", (req, res) => {
  res.send(items.slice(0, 3));
});

app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((i) => i.id === id);
  if (!item) {
    return res.status(404).json({ error: "item not found" });
  }
  res.send(item);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
