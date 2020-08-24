const { body } = require('express-validator');

module.exports = {
    postValidator: [
        body('idCategory')
            .isInt().withMessage('idCategory must be integer'),
        body('name')
            .isString().withMessage('name must be string')
            .notEmpty().withMessage('name must not be empty'),
        body('minimum')
            .custom(values =>{
                if(isNaN(values))
                    throw new Error('minimum must be a number');
                if(value <= 0)
                    throw new Error('minimum must be greater than 0');
                return true;
            })
        ]      
}