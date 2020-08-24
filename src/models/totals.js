'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Totals extends Model {
    static associate(models) {
      Totals.belongsTo(models.branch_offices);
      Totals.belongsTo(models.products);
    }
  };
  Totals.init({
    branch_officeId: DataTypes.UUID,
    supermarketId: DataTypes.UUID,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'totals',
  });
  return Totals;
};