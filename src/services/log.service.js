const {LogMapping} = require("./mappings")
const BaseService = require("./base")

class LogService extends BaseService{
    constructor({ LogRepository }) {
        super(LogRepository, LogMapping);
    }
}

module.exports = LogService;