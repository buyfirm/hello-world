const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`${process.env.GOODBYE} from ${process.env.NODE_ENV}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}, ${process.env.NODE_ENV}`);
});
