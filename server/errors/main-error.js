require("dotenv").config();
const debug = require("debug")("small-server:errors");

const notFoundError = (req, res) => {
  res.status(404);
  res.json({ error: true, message: "I didn't found that resource" });
};

const internalServerError = (arr, req, res) => {
  debug("Internal server error");
  res.status(500);
  res.json({
    error: true,
    message: "Our server is down, please come back later",
  });
};

module.exports = {
  notFoundError,
  internalServerError,
};
