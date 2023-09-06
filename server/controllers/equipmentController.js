const equipmentService = require("../services/equipmentService");

class EquipmentController {
  async getEquipmentItems(req, res, next) {
    try {
      const equipmentItems = await equipmentService.getEquipmentItems();
      res.status(200).json(equipmentItems);
    } catch (error) {
      next(error);
    }
  }

  async createEquipmentItem(req, res, next) {
    try {
      const { name, description, quantity, category } = req.body;
      const newEquipmentItem = await equipmentService.createEquipmentItem({
        name,
        description,
        quantity,
        category,
      });
      res.status(201).json(newEquipmentItem);
    } catch (error) {
      next(error);
    }
  }

  async updateEquipmentItem(req, res, next) {
    try {
      const { equipmentId } = req.params;
      const { name, description } = req.body;
      const updatedEquipmentItem = await equipmentService.updateEquipmentItem(
        equipmentId,
        name,
        description
      );
      res.status(200).json(updatedEquipmentItem);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new EquipmentController();
