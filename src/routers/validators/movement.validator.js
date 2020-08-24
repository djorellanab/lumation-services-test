const { body } = require('express-validator');

module.exports = {
    postValidator: [
        body('branch_officeId')
            .isUUID().withMessage('branch_officeId must be UUID'),
        body('supermarketId')
            .isUUID().withMessage('supermarketId must be UUID'),
        body('productId')
            .isInt().withMessage('productId must be integer'),
        body('type_movementId')
            .isInt().withMessage('type_movementId must be integer'),
        body('quantity')
            .custom(values =>{
                if(isNaN(values))
                    throw new Error('quantity must be a number');
                if(value <= 0)
                    throw new Error('quantity must be greater than 0');
                return true;
            })
        ]      
}