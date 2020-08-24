const { body } = require('express-validator');

module.exports = {
    postValidator: [
        body('supermarketId')
            .isUUID().withMessage('supermarketId must UUID'),
        body('name')
            .isString().withMessage('name must be string')
            .notEmpty().withMessage('name must not be empty')
        ]      
}