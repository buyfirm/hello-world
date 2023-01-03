const winston = require("winston"),
  WinstonCloudWatch = require("winston-cloudwatch");

const logger = new winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      timestamp: true,
      colorize: true,
    }),
  ],
});

if (!process.env.IS_LOCALHOST) {
  const cloudwatchConfig = {
    logGroupName: process.env.CLOUDWATCH_GROUP_NAME,
    logStreamName: `${process.env.CLOUDWATCH_GROUP_NAME}--${process.env.NODE_ENV}`,
    awsAccessKeyId: process.env.AWS_ACCESS_KEY,
    awsSecretKey: process.env.AWS_SECRET_KEY,
    awsRegion: process.env.AWS_REGION,
    messageFormatter: ({ level, message, additionalInfo }) =>
      `[${level}] : ${message} \nAdditional Info: ${JSON.stringify(
        additionalInfo
      )}}`,
  };
  logger.add(new WinstonCloudWatch(cloudwatchConfig));
}
module.exports = logger;
