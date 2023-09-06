const Equipment = require("../models/equipment");
const Category = require("../models/category");

class EquipmentService {
  async getEquipmentItems() {
    try {
      return await Equipment.find()
        .populate("category", ["categoryId", "name"])
        .exec();
    } catch (error) {
      throw error;
    }
  }

  async createEquipmentItem(equipment) {
    try {
      const newEquipmentItem = new Equipment(equipment);

      const category = await Category.findOne({
        categoryId: equipment.category,
      });

      if (!category) {
        const error = new Error("Categoría asignada no existe.");
        error.status = 400;
        throw error;
      }

      newEquipmentItem.category = category;

      return await newEquipmentItem.save();
    } catch (error) {
      throw error;
    }
  }

  async updateEquipmentItem(equipmentId, name, description) {
    try {
      const updatedEquipmentItem = await Equipment.findOneAndUpdate(
        { equipmentId },
        { name, description },
        { new: true }
      );

      if (!updatedEquipmentItem) {
        const error = new Error("Equipo no encontrado.");
        error.status = 404;
        throw error;
      }

      return updatedEquipmentItem;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new EquipmentService();
