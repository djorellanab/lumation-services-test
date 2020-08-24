'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('type_movements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: 'identification of type movement'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'name of movement'
      },
      isInput: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        comment: 'it is input, otherwise is output'
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
      comment: 'Catalog of movements that you will found an inventary'
    });
    const now = new Date();
    await queryInterface.bulkInsert({ tableName: 'type_movements', schema: 'business' }, [{
      id: 1,
      name: "transfer inputs",
      isInput: true,
      createdAt: now,
      updatedAt: now
    },{
      id: 2,
      name: "transfer outputs",
      isInput: false,
      createdAt: now,
      updatedAt: now
    }]);
    await queryInterface.sequelize.query('create or replace rule protect_updated_type_movements as on update to "business"."type_movements" where old.id in (1,2) do instead nothing;');
    await queryInterface.sequelize.query('create or replace rule protect_delete_type_movements as on delete to "business"."type_movements" where old.id in (1,2) do instead nothing;');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName:'type_movements',schema: 'business'});
  }
};