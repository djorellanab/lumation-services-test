'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supermarkets extends Model {
    static associate(models) {
      Supermarkets.hasMany(models.branch_offices);
    }
  };
  Supermarkets.init({
    name: DataTypes.STRING,
    businessId: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'supermarkets',
    schema: "business"
  });
  return Supermarkets;
};