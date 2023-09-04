const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, default: shortid.generate },
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
