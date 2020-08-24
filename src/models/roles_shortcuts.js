'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles_shortcuts extends Model {
    static associate(models) {
      
    }
  };
  Roles_shortcuts.init({
    roleId: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    shortcutId: {
      type: DataTypes.UUID,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'roles_shortcuts',
    schema: "security"
  });
  return Roles_shortcuts;
};