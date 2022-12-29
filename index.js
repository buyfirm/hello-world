const express = require("express");
const app = express();
const port = 3001;
const awsParamEnv = require("aws-param-env");
awsParamEnv.load("/hello-world/dev", { region: "us-east-2" });

app.get("/", (req, res) => {
  res.send(`${process.env.GOODBYE} from ${process.env.NODE_ENV}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}, ${process.env.NODE_ENV}`);
});
