const {PermitionMapping} = require("./mappings")
const BaseService = require("./base")

class PermitionService extends BaseService{
    constructor({ PermitionRepository }) {
        super(PermitionRepository, PermitionMapping);
    }
}

module.exports = PermitionService;