const containers = require("./src");
const ServerStartup = containers.resolve('ServerStartup');
const db = containers.resolve('db');

db.sequelize
  .authenticate()
  .then(() => {
    ServerStartup.start();
    console.log('Connection with DB has been established successfully.');
  })
  .catch((ex) => {
    console.log(ex);
  });