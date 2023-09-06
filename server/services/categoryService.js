const Category = require("../models/category");

class CategoryService {
  async createCategory(categoryData) {
    try {
      const category = new Category(categoryData);
      return await category.save();
    } catch (error) {
      throw error;
    }
  }

  async updateCategory(categoryId, newDescription) {
    try {
      const updatedCategory = await Category.findOneAndUpdate(
        { categoryId },
        { description: newDescription },
        { new: true } // Return the updated category
      );

      if (!updatedCategory) {
        const error = new Error("Categoría no encontrada.");
        error.status = 404;
        throw error;
      }

      return updatedCategory;
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
