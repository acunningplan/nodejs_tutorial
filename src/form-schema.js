import express from "express";
import path from "path";
import Joi from "@hapi/joi";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.post("/", (req, res) => {
  console.log(req.body);

  // Prepare data object for Joi validation
  const data = {};
  req.body.forEach(e => {
    data[e.name] = e.value;
  });

  console.log(data);

  // Validate user email and password with Joi
  const schema = Joi.object().keys({
    email: Joi.string()
      .trim()
      .email()
      .required(),
    password: Joi.string()
      .min(5)
      .max(30)
      .required()
  });

  Joi.validate(data, schema, (err, result) => {
    if (err) {
      console.log(err);
      res.send("An error has occurred");
    } else {
      console.log(result);
      res.send("Data successfully posted.");
    }
  });
  // Do something with the data and database
});
