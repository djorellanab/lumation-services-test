const BaseController = require('./base');

class CategoryController extends BaseController{
    constructor({ CategoryService }) {
        super(CategoryService);
    }
}
module.exports = CategoryController;