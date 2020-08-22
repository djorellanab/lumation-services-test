const { asValue } = require('awilix');
const swaggerDocument = require("../swagger");

module.exports = function(container){
    container.register({
        swaggerDocument: asValue(swaggerDocument)
    });
}
