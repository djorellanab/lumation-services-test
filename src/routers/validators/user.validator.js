const { body } = require('express-validator');

module.exports = {
    postValidator: [
        body('email')
            .isEmail().withMessage('email must match email regex')
            .normalizeEmail(),
        body('password')
            .isString().withMessage('password must be string')
            .notEmpty().withMessage('password must not be empty'),
        body('rolId')
            .isUUID().withMessage('rolId must be string')        
        ],
    loginValidator : [
        body('email')
            .isEmail().withMessage('email must match email regex')
            .normalizeEmail(),
        body('password')
            .isString().withMessage('password must be string')
            .notEmpty().withMessage('password must not be empty')
        ]          
}