'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('roles_shortcuts', {
      roleId: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: 'roles',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        comment: 'it is rol'
      },
      shortcutId: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: 'shortcuts',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        comment: 'it allows to access the shortcut'
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
      comment: 'Manager of shortcuts of the rol'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName:'roles_shortcuts',schema: 'security'});
  }
};