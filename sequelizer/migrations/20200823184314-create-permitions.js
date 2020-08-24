'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('permitions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: 'identification of the access (incremental)'
      },
      businessId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        comment: 'id of the business entity'
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        comment: 'it is the user'
      },
      object: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['SUPERMARKETS', 'BRANCH-OFFICES'],
        comment: 'type of the object'
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
      comment: 'it checks the access of the business entities'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName:'permitions',schema: 'security'});
  }
};