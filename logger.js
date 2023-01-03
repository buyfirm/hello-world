const winston = require("winston");
const WinstonCloudWatch = require("winston-cloudwatch");
if (require.main === module) {
  const awsParamEnv = require("aws-param-env");
  awsParamEnv.load("/hello-world/dev", { region: "us-east-2" });
}
var cloudwatchConfig;

if (!process.env.IS_LOCALHOST) {
  console.log(`creating a logger in ${process.env.AWS_REGION}`);
  cloudwatchConfig = {
    logGroupName: process.env.CLOUDWATCH_GROUP_NAME,
    logStreamName: `${process.env.CLOUDWATCH_GROUP_NAME}--${process.env.NODE_ENV}`,
    awsRegion: process.env.AWS_REGION,
    awsAccessKeyId: process.env.AWS_ACCESS_KEY,
    awsSecretKey: process.env.AWS_SECRET_KEY,
    messageFormatter: ({ level, message, additionalInfo }) =>
      `[${level}] : ${message} \nAdditional Info: ${JSON.stringify(
        additionalInfo
      )}}`,
  };
  winston.add(new WinstonCloudWatch(cloudwatchConfig));
  if (require.main === module)
    winston.log("info", `Testing hello-world's logger`, {
      tags: "http",
    });
}

module.exports = winston;
