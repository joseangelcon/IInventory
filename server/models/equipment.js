const mongoose = require("mongoose");
const { generateCustomId } = require("../constants");

const equipmentSchema = new mongoose.Schema(
  {
    _id: { type: String, default: generateCustomId },
    name: { type: String, required: true },
    description: String,
    quantity: {
      type: Number,
      required: true,
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

// equipmentSchema.pre("save", async function (next) {
//   if (this.isNew) {
//     try {
//       const lastDocument = await Equipment.findOne(
//         {},
//         {},
//         { sort: { sequence: -1 } }
//       );
//       this.equipmentId = lastDocument ? lastDocument.equipmentId + 1 : 1;
//     } catch (error) {
//       return next(error);
//     }
//   }
//   next();
// });

const Equipment = mongoose.model("Equipment", equipmentSchema);

module.exports = Equipment;
