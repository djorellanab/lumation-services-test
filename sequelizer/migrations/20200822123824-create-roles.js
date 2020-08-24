'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema("security", {comment: "models of the microservices security"})
    await queryInterface.createTable('roles', {
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
        comment: 'Unique name of rol'
      },
      description: {
        type: Sequelize.STRING,
        comment: 'What does rol do?'
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
      comment: 'Manager of roles'
    });
    const now = new Date();
    await queryInterface.bulkInsert({ tableName: 'roles', schema: 'security' }, [{
      id: 'c22ebda0-23ca-48bb-a604-a439853f6675',
      name: 'super admin',
      description: 'rol that has access all actions of the system',
      createdAt: now,
      updatedAt: now
    },{
      id: '16fb6a89-f773-4f47-a2e0-4feed35eaac9',
      name: 'supermarket manager',
      description: 'rol that has access actions of the supermarkets',
      createdAt: now,
      updatedAt: now
    },{
      id: '476710fb-6dce-4697-aee9-d3ebf73e4de2',
      name: 'branch office manager',
      description: 'rol that has access actions of the branch offices',
      createdAt: now,
      updatedAt: now
    }]);
    await queryInterface.sequelize.query('create or replace rule protect_updated_roles as on update to "security"."roles" do instead nothing;');
    await queryInterface.sequelize.query('create or replace rule protect_delete_roles as on delete to "security"."roles" do instead nothing;');
    await queryInterface.sequelize.query('create or replace rule protect_insert_roles as on insert to "security"."roles" do instead nothing;');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName:'roles',schema: 'security'});
    await queryInterface.dropSchema('security');
  }
};