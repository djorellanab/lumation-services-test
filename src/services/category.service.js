const {CategoryMapping} = require("./mappings")
const BaseService = require("./base")

class CategoryService extends BaseService{
    constructor({ CategoryRepository }) {
        super(CategoryRepository, CategoryMapping);
    }
}

module.exports = CategoryService;