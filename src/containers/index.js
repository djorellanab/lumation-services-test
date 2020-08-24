const { createContainer } = require('awilix');

const container = createContainer();

require("./configs.container")(container);
require("./controllers.container")(container);
require("./middlewares.container")(container);
require("./models.container")(container);
require("./repositories.container")(container);
require("./routers.container")(container);
require("./services.container")(container);
require("./startups.container")(container);
require("./swagger.container")(container);

module.exports = container;