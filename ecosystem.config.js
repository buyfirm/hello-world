module.exports = {
  apps: [
    {
      name: "hello-world",
      script: "./index.js",
      env: {
        NODE_ENV: "staging",
      },
    },
  ],
};
