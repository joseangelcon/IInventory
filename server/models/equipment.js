const mongoose = require("mongoose");
const { generateCustomId } = require("../constants");

const equipmentSchema = new mongoose.Schema(
  {
    equipmentId: {
      type: String,
      default: generateCustomId,
      required: true,
      unique: true,
    },
    name: { type: String, required: true },
    description: String,
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

const Equipment = mongoose.model("Equipment", equipmentSchema);

module.exports = Equipment;
