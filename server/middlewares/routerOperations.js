require("dotenv").config();
const debug = require("debug")("small-server:router");
const express = require("express");
const ThingIKnow = require("../../db/models/ThingIKnow");

const routerOperations = express.Router();

routerOperations.get("/", (req, res) => {
  debug(`They are asking for my things`);
  res.end();
});

routerOperations.get("/id", (req, res) => {});

routerOperations.delete("/id", (req, res) => {});

routerOperations.post("/a", async (req, res) => {
  debug("Creating a new thing");
  const newThing = req.body;
  const createdThing = await ThingIKnow.create(newThing);
  debug(createdThing);
  res.status(201);
  res.json(createdThing);
  res.write("HI");
});

routerOperations.put("/", (req, res) => {});

module.exports = routerOperations;
