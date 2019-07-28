import express from "express";
import path from "path";

const app = express();

app.use("/public", express.static(path.join(__dirname, "static")));
app.set("view engine", "ejs");
app.get("/:userQuery", (req, res) => {
  const { userQuery } = req.params;
  res.render("index", {
    data: {
      userQuery,
      searchResults: ["book1", "book2", "book3"],
      loggedIn: true,
      username: "James"
    }
  });
});

app.listen(3001);
