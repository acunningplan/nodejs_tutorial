const express = require("express");
const route = express.Router();

route.use((req, res, next) => {
  console.log("Middleware being used");
  next();
});

route.get("/", (req, res) => {
  res.send('You have arrived at "/" route');
});

route.get("/example", (req, res) => {
  res.send('You have arrived at "/example" route ');
});

module.exports = route;
