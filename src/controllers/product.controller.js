const BaseController = require('./base');

class ProductController extends BaseController{
    constructor({ ProductService }) {
        super(ProductService);
    }
}
module.exports = ProductController;