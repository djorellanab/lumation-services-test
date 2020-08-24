const BaseController = require('./base');

class Type_MovementController extends BaseController{
    constructor({ Type_MovementService }) {
        super(Type_MovementService);
    }
}
module.exports = Type_MovementController;