const { asFunction, asClass } = require('awilix');

const { RouterStartup, ServerStartup } = require("../startups");

module.exports = function(container){
    container.register({
        ServerStartup: asClass(ServerStartup).singleton(),
        RouterStartup: asFunction(RouterStartup).singleton()
    });
}