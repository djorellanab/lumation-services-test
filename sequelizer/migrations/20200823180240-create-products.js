'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: 'product identification (incremental)'
      },
      idCategory: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        comment: 'category of the product'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'name of the product'
      },
      minimum: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        comment: 'minimum of product in the inventory'
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
      comment: 'Manager of products'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName:'products',schema: 'business'});
  }
};