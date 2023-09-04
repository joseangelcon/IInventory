const { generateCustomId } = require("../constants");
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
      const updatedCategory = await Category.findByIdAndUpdate(
        categoryId,
        { description: newDescription },
        { new: true } // Return the updated category
      );

      if (!updatedCategory) {
        throw new Error("Categoría no encontrada.");
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
