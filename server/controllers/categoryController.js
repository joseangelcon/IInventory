const categoryService = require("../services/categoryService");

class CategoryController {
  async createCategory(req, res, next) {
    try {
      const category = await categoryService.createCategory(req.body);
      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }

  async updateCategory(req, res, next) {
    try {
      const { categoryId } = req.params;
      const { description } = req.body;

      const updatedCategory = await categoryService.updateCategory(
        categoryId,
        description
      );

      res.status(200).json(updatedCategory);
    } catch (error) {
      next(error);
    }
  }

  async getAllCategories(req, res, next) {
    try {
      const categories = await categoryService.getAllCategories();
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CategoryController();
