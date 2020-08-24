'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        comment: 'register identification'
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
        comment: 'email of the user'
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: 'password is encripted'
      },
      roleId: {
        type: Sequelize.UUID,
        allowNull: false,
        comment: 'it is a rol to manage the access of the API actions',
        references: {
          model: 'roles',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      isAdmin:{
        type: Sequelize.BOOLEAN,
        comment: 'access to superadmin',
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
      schema: 'security',
      comment: 'Manager of users'
    });
    const now = new Date();
    const {admin} = require("../../src/configs")
    const {cryptHelper} = require("../../src/helpers")
    await queryInterface.bulkInsert({ tableName: 'users', schema: 'security' }, [{
      id: '046ceeff-41ff-4789-a71d-8eae89aa925c',
      email: admin.email,
      password: cryptHelper.hash(admin.password),
      roleId: 'c22ebda0-23ca-48bb-a604-a439853f6675',
      isAdmin: true,
      createdAt: now,
      updatedAt: now
    }]);
    await queryInterface.sequelize.query('create or replace rule protect_updated_users as on update to "security"."users" where old.id = \'046ceeff-41ff-4789-a71d-8eae89aa925c\' do instead nothing;');
    await queryInterface.sequelize.query('create or replace rule protect_delete_users as on delete to "security"."users" where old.id = \'046ceeff-41ff-4789-a71d-8eae89aa925c\' do instead nothing;');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName:'users',schema: 'security'});
  }
};