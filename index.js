require("dotenv").config();
const debug = require("debug")("small-server:root");
const connectDataBase = require("./db");
const serverInitializer = require("./server/index");

const port = process.env.MY_PORT;
const magicString = process.env.DATA_BASE_MONGO;

(async () => {
  try {
    debug("hi");
    await connectDataBase(magicString);
    await serverInitializer(port);
  } catch (error) {
    debug(error.message);
  }
})();
