'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('shortcuts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        comment: 'register identification'
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
        comment: 'Unique name of shortcut'
      },
      method: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['GET', 'POST', 'PATCH', 'DELETE'],
        comment: 'HTTP method'
      },
      endpoint: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: 'path of the endpoint'
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
      schema: 'security',
      comment: 'Manager of shortcuts'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName:'shortcuts',schema: 'security'});
  }
};