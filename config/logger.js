import Logger from "express-bunyan-logger";

const logger = Logger({
  name: "logger",
  format: ":remote-address - :user-agent[major] custom logger",
  streams: [
    {
      level: "info",
      stream: process.stdout,
    },
  ],
});

export default logger;
