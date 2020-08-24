const BaseController = require('./base');

class MovementController extends BaseController{
    constructor({ MovementService }) {
        super(MovementService);
    }
}
module.exports = MovementController;