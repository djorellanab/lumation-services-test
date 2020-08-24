const BaseController = require('./base');

class PermitionController extends BaseController{
    constructor({ PermitionService }) {
        super(PermitionService);
    }
}
module.exports = PermitionController;