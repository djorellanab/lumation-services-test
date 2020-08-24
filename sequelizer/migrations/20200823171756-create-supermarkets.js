'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema("business", {comment: "model of bussiness logic"});
    await queryInterface.createTable('supermarkets', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        comment: 'Identification of supermarket'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Name of the market'
      },
      businessId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true,
        comment: 'it is an object identification'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: 'it is the date when a register was created'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: 'it is the date when a register was updated the last time'
      }
    }, {
      schema: 'business',
      comment: 'Manager of supermarkets',
      indexes: [
        {
          fields: ['businessId']
        }
      ]
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName:'supermarkets',schema: 'business'});
    await queryInterface.dropSchema('business');
  }
};