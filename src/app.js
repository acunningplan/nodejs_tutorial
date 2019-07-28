import express from "express";
import bodyParser from "body-parser";

import people from "./routes/people";

const app = express();

// Use "people" routes
app.use("/people", people);

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.kiwi = "kiwi";
  console.log(req.url, req.method);
  next();
});

app.get("/", (req, res) => {
  console.log(req.kiwi);
  res.send("You have applied a middleware");
});

app.listen(3001);
