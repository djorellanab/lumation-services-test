'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movements extends Model {
    static associate(models) {
      Movements.belongsTo(models.branch_offices);
      Movements.belongsTo(models.products);
      Movements.belongsTo(models.type_movements);
    }
  };
  Movements.init({
    branch_officeId: DataTypes.UUID,
    supermarketId: DataTypes.UUID,
    productId: DataTypes.INTEGER,
    type_movementId: DataTypes.INTEGER,
    quantity: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'movements',
    schema: "inventory",
    createdAt: true,
    updatedAt: false
  });
  return Movements;
};