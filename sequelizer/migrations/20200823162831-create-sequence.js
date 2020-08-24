'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('create sequence "security"."business_seq" start with 1 increment by 1;');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('drop sequence "security"."business_seq";');
  }
};