const { asValue } = require('awilix');
const db = require('../models');

module.exports = function(container){
    container.register({
        db: asValue(db)
    });
}
