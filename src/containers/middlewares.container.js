const { asClass } = require('awilix');

const { AccessMiddleware, AuthenticationMiddleware, HealthcheckMiddleware,
     ValidationMiddleware, LogsMiddleware } = require("../middlewares");

module.exports = function(container){
    container.register({
        AccessMiddleware: asClass(AccessMiddleware).singleton(),
        AuthenticationMiddleware: asClass(AuthenticationMiddleware).singleton(),
        HealthcheckMiddleware: asClass(HealthcheckMiddleware).singleton(),
        LogsMiddleware: asClass(LogsMiddleware).singleton(),
        ValidationMiddleware: asClass(ValidationMiddleware).singleton()
    });
}