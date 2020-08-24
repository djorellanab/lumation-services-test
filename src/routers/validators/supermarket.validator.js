const { body } = require('express-validator');

module.exports = {
    postValidator: [
        body('name')
            .isString().withMessage('name must be string')
            .notEmpty().withMessage('name must not be empty')
        ]      
}