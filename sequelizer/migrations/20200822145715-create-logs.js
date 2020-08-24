'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
        comment: 'row id incremental'
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        comment: 'What user did it do? (null is the computer)'
      },
      shortcutId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'shortcuts',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        comment: 'What action did it do?'
      },
      metadata: {
        type: Sequelize.STRING,
        comment: 'it is a json body'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: 'it is the date when a register was created'
      },
    },  {
      schema: 'security',
      comment: 'Manager logs of the system'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName:'logs',schema: 'security'});
  }
};