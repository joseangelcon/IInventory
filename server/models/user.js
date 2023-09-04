const mongoose = require("mongoose");
const { generateCustomId } = require("../constants");

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, default: generateCustomId },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Enable timestamps for created and updated dates
);

const User = mongoose.model("User", userSchema);

module.exports = User;
