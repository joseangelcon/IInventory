const mongoose = require("mongoose");
const { generateCustomId } = require("../constants");

const categorySchema = new mongoose.Schema(
  {
    categoryId: {
      type: String,
      default: generateCustomId,
      required: true,
      unique: true,
    },
    name: String,
    description: String,
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
