require("dotenv").config();
const debug = require("debug")("small-server:Operations");
const express = require("express");
const morgan = require("morgan");
const { notFoundError, internalServerError } = require("./errors/main-error");
const routerOperations = require("./middlewares/routerOperations");

const app = express();

const serverInitializer = async (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`The server is up and listening on http://localhost:${port}`);
      resolve();
    });

    server.on("error", (error) => {
      reject(new Error(`Error on server: ${error.message}`));
    });
  });

app.use(morgan("dev"));
app.use(express.json());
app.use("/things", routerOperations);
app.use(notFoundError, internalServerError);

module.exports = serverInitializer;
