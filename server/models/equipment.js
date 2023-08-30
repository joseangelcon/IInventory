const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema({
  // Define your schema fields here
  name: String,
  description: String,
  // ...
});

const Equipment = mongoose.model("Equipment", equipmentSchema);

module.exports = Equipment;
