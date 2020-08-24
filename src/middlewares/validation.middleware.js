const { validationResult } = require('express-validator');

class ValidationMiddleware{
    constructor({configs}){
        this.configs = configs;
    }

    async checkValidations(req, res, next){
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(422).send({ message: errors.array() });      
            next();
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = ValidationMiddleware;