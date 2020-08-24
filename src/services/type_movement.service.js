const {Type_MovementMapping} = require("./mappings")
const BaseService = require("./base")

class Type_MovementService extends BaseService{
    constructor({ Type_MovementRepository }) {
        super(Type_MovementRepository, Type_MovementMapping);
    }
}

module.exports = Type_MovementService;