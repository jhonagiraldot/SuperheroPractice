const mongoose = require("mongoose");

const superhero_schema = mongoose.Schema({

  hero_name: { type: String, require: true },
  real_name: { type: String, require: true },
  age: { type: Number, require: true },
  superpowers: { type: Array, require: true }
});

module.exports = mongoose.model("heros", superhero_schema);
