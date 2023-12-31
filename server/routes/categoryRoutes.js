const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Create a new category
router.post("/categories", categoryController.createCategory);

// Get all categories
router.get("/categories", categoryController.getAllCategories);

//Update category
router.patch("/categories/:categoryId", categoryController.updateCategory);

module.exports = router;
