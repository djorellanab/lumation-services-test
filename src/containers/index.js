const { createContainer } = require('awilix');

const container = createContainer();

require("./configs.container")(container);
require("./middlewares.container")(container);
require("./startups.container")(container);
require("./swagger.container")(container);

module.exports = container;