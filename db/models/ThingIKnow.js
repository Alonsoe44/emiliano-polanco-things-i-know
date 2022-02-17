const { model, Schema } = require("mongoose");

const superThingSchema = new Schema({
  thing: {
    type: String,
  },
  difficulty: {
    type: String,
  },
});

const superThing = model("TKnow", superThingSchema, "Awa de uwu");

module.exports = superThing;
// © 2022 GitHub, Inc.
