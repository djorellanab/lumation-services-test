'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    static associate(models) {
      Roles.hasMany(models.users);
      Roles.belongsToMany(models.shortcuts, { through: models.roles_shortcuts});
    }
  };
  Roles.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'roles',
    schema: "security"
  });
  return Roles;
};