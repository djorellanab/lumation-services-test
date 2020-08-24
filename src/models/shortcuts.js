'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shortcuts extends Model {
    static associate(models) {
      Shortcuts.belongsToMany(models.roles, { through: models.roles_shortcuts});
      Shortcuts.hasMany(models.logs);
    }
  };
  Shortcuts.init({
    name: DataTypes.STRING,
    method:  {
      type: DataTypes.ENUM,
      values: ['GET', 'POST', 'PATCH', 'DELETE']
    },
    endpoint: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'shortcuts',
    schema: "security"
  });
  return Shortcuts;
};