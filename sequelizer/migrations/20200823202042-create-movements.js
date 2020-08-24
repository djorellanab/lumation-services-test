'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema("inventory", {comment: "models of the microservices inventory"})
    await queryInterface.createTable('movements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
        comment: 'Identification of movement'
      },
      branch_officeId: {
        type: Sequelize.UUID,
        allowNull: false,
        comment: 'the branch office does make the action'
      },
      supermarketId: {
        type: Sequelize.UUID,
        allowNull: false,
        comment: 'supermarket of the branch office'
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'product of the inventory'
      },
      type_movementId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'it says the actions (input or output)'
      },
      quantity: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        comment: 'quantity of the product'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: 'it is the date when a register was created'
      }
    }, {
      schema: 'inventory',
      comment: 'movements that will have a inventory'
    });
    await queryInterface.sequelize.query('ALTER TABLE inventory.movements ADD CONSTRAINT movements_branch_offices_fk FOREIGN KEY ("branch_officeId", "supermarketId") REFERENCES business.branch_offices("id","supermarketId") ON DELETE cascade on update cascade;');
    await queryInterface.sequelize.query('alter table inventory.movements add constraint movements_products_fk foreign key ("productId") references business.products("id") ON DELETE cascade on update cascade;');
    await queryInterface.sequelize.query('alter table inventory.movements add constraint movements_type_movements_fk foreign key ("type_movementId") references business.type_movements("id") on delete cascade on update cascade;');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName:'movements',schema: 'inventory'});
    await queryInterface.dropSchema('inventory');
  }
};