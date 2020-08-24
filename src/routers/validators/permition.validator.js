const { body } = require('express-validator');

module.exports = {
    postValidator: [
        body('businessId')
            .isInt().withMessage('businessId must be number'),
        body('userId')
            .isUUID().withMessage('userId must be uuid'),
        body('object')
            .isIn(['SUPERMARKETS', 'BRANCH-OFFICES']).withMessage('object must be SUPERMARKETS or BRANCH-OFFICES')
        ]      
}