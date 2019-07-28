import express from "express";
import path from "path";

const app = express();

// Apply static content (e.g. custom css styling) in "static" folder only if requested file in index.html is prefixed with "public"
app.use("/public", express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.send("Hello World! Check out the example route.");
});

app.get("/example", (req, res) => {
  res.send("Hitting example route");
});

app.get("/example/:name/:age", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.json({ success: true });
});

app.listen(3001);
