import express from "express";
import path from "path";

const app = express();

// app.use("/public", express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "static", "index.html"));
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("/example", (req, res) => {
  res.send("Hitting example route");
});

app.get("/example/:name/:age", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  const { name, age } = req.params;
  res.send(name + ": " + age);
});

app.listen(3001);
