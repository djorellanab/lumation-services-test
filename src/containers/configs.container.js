const { asValue } = require('awilix');
const configs = require("../configs");

module.exports = function(container){
    container.register({
        configs: asValue(configs)
    });
}
