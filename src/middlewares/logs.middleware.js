class LogsMiddleware{
    constructor({LogService}){
        this.LogService = LogService;
    }
    enterLog(log, answer){
        return function(req, res, next){
            if(!req.hasLog)
            {
                return next();
            }
            try {
                if(req.body)
                {
                    const { sanitizeHelper } = require("../helpers")
                    sanitizeHelper.cleanSensitiveData(req.body);
                    log.metadata = JSON.stringify(req.body);
                }
                this.LogService.create(log);
                return res.status(201).json(answer);   
            } catch (error) {
                console.log(error);
            }
        }
    }
}

module.exports = LogsMiddleware;