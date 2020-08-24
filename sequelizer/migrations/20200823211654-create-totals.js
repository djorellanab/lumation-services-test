'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('totals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
        comment: 'Identification total'
      },
      branch_officeId: {
        type: Sequelize.UUID,
        comment: 'branch office',
        allowNull: false
      },
      supermarketId: {
        type: Sequelize.UUID,
        comment: 'supermarket of the branch office',
        allowNull: false
      },
      productId: {
        type: Sequelize.INTEGER,
        comment: 'product of the inventory',
        allowNull: false
      },
      quantity: {
        type: Sequelize.DECIMAL,
        comment: 'Total product as of today',
        allowNull: false
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
      schema: 'inventory',
      comment: 'Manager of total of product (as of today)'
    });
    await queryInterface.sequelize.query('ALTER TABLE inventory.totals ADD CONSTRAINT totals_branch_offices_fk FOREIGN KEY ("branch_officeId", "supermarketId") REFERENCES business.branch_offices("id","supermarketId") ON DELETE cascade on update cascade;');
    await queryInterface.sequelize.query('alter table inventory.totals add constraint totals_products_fk foreign key ("productId") references business.products("id") ON DELETE cascade on update cascade;');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName:'movements',schema: 'totals'});
  }
};