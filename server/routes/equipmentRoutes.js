const express = require("express");
const router = express.Router();
const equipmentController = require("../controllers/equipmentController");

// Get equipment items
router.get("/equipment", equipmentController.getEquipmentItems);

// Create a new equipment item
router.post("/equipment", equipmentController.createEquipmentItem);

// Update an equipment item
router.patch(
  "/equipment/:equipmentId",
  equipmentController.updateEquipmentItem
);

module.exports = router;
