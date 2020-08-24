'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type_movements extends Model {
    static associate(models) {
      Type_movements.hasMany(models.movements);
    }
  };
  Type_movements.init({
    name: DataTypes.STRING,
    isInput: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'type_movements',
    schema: "business"
  });
  return Type_movements;
};