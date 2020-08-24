const {TotalMapping} = require("./mappings")
const BaseService = require("./base")

class TotalService extends BaseService{
    constructor({ TotalRepository }) {
        super(TotalRepository, TotalMapping);
    }
}

module.exports = TotalService;