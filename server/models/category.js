const mongoose = require("mongoose");
const shortid = require("shortid");

const categorySchema = new mongoose.Schema(
  {
    _id: { type: String, default: shortid.generate },
    name: String,
    description: String,
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
