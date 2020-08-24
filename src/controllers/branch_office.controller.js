const BaseController = require('./base');

class Branch_OfficeController extends BaseController{
    constructor({ Branch_OfficeService }) {
        super(Branch_OfficeService);
    }
}
module.exports = Branch_OfficeController;