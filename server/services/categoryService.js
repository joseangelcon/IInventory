const Category = require("../models/category");

class CategoryService {
  async createCategory(categoryData) {
    try {
      const category = new Category(categoryData);
      return await category.save();
      return;
    } catch (error) {
      throw error;
    }
  }

  async getAllCategories() {
    try {
      return await Category.find();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new CategoryService();
