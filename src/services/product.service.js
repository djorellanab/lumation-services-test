const {ProductMapping} = require("./mappings")
const BaseService = require("./base")

class ProductService extends BaseService{
    constructor({ ProductRepository }) {
        super(ProductRepository, ProductMapping);
    }
}

module.exports = ProductService;