module.exports = {
  apps: [
    {
      name: "main-service",
      script: "./index.js",
      env: {
        NODE_ENV: "staging",
      },
    },
  ],
};
