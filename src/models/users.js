'use strict';
const {
  Model
} = require('sequelize');

const { cryptHelper} = require("../helpers");
const { password } = require('../configs/database.config');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.belongsTo(models.roles);
      Users.hasMany(models.logs);
      Users.hasMany(models.permitions);
    }
    validPassword(password){
      return cryptHelper.compareString(password, this.password);
    }
  };
  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: DataTypes.UUID,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'users',
    schema: "security",
    hooks:{
      beforeCreate: (user) =>{
        user.password = cryptHelper.hash(password);
      }
    }
  });
  return Users;
};