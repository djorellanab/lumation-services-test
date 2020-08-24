'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {
      Categories.hasMany(models.products);
    }
  };
  Categories.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categories',
    schema: "business"
  });
  return Categories;
};