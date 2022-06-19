const express = require("express");
const app = express();
const port = 3000;

app.get("/user/:id", (req, res) => {
  res.send({ name: "a" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
