const { asClass } = require('awilix');

const { HealthcheckMiddleware } = require("../middlewares");

module.exports = function(container){
    container.register({
        HealthcheckMiddleware: asClass(HealthcheckMiddleware).singleton(),
    });
}