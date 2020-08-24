'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Branch_offices extends Model {
    static associate(models) {
      Branch_offices.belongsTo(models.supermarkets);
      Branch_offices.hasMany(models.movements);
      Branch_offices.hasMany(models.totals);
    }
  };
  Branch_offices.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    supermarketId: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
    businessId: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'branch_offices',
    schema: "business"
  });
  return Branch_offices;
};