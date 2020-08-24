'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Logs extends Model {
    static associate(models) {
      Logs.belongsTo(models.users);
      Logs.belongsTo(models.shortcuts);
    }
  };
  Logs.init({
    userId: DataTypes.UUID,
    shortcutId: DataTypes.UUID,
    metadata: DataTypes.STRING,
  }, {
    sequelize,
    createdAt: true,
    updatedAt: false,
    modelName: "logs",
    schema: "security"
  });
  return Logs;
};