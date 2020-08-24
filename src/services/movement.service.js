const {MovementMapping} = require("./mappings")
const BaseService = require("./base")

class MovementService extends BaseService{
    constructor({ MovementRepository }) {
        super(MovementRepository, MovementMapping);
    }
}

module.exports = MovementService;