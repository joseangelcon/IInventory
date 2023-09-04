const mongoose = require("mongoose");
const { generateCustomId } = require("../constants");

const categorySchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: generateCustomId,
    },
    name: String,
    description: String,
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
