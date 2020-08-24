'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permitions extends Model {
    static associate(models) {
      Permitions.belongsTo(models.users);
    }
  };
  Permitions.init({
    businessId: DataTypes.BIGINT,
    userId: DataTypes.UUID,
    object:  {
      type: DataTypes.ENUM,
      values: ['SUPERMARKETS', 'BRANCH-OFFICES']
    },
  }, {
    sequelize,
    modelName: 'permitions',
    schema: "security"
  });
  return Permitions;
};