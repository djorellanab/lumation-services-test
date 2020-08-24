'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('branch_offices', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        comment: 'Identification of branch office'
      },
      supermarketId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'supermarkets',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        comment: 'Identification of supermarket'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'name of the branch office'
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
      comment: 'Manager of branch offices',
      indexes: [
        {
          fields: ['businessId']
        }
      ]
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName:'branch_offices',schema: 'business'});
  }
};