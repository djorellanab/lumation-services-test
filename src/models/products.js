'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.belongsTo(models.categories);
      Products.hasMany(models.movements);
      Products.hasMany(models.totals);
    }
  };
  Products.init({
    name: DataTypes.STRING,
    idCategory: DataTypes.NUMBER,
    minimum: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'products',
    schema: "business"
  });
  return Products;
};