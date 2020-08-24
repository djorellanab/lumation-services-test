const BaseController = require('./base');

class SupermarketController extends BaseController{
    constructor({ SupermarketService }) {
        super(SupermarketService);
    }
}
module.exports = SupermarketController;