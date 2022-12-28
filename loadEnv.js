"use strict";

const awsParamEnv = require("aws-param-env");

awsParamEnv.load("/hello-world/dev", { region: "us-east-2" });

console.log(process.env);
