const objectMapper = require('object-mapper');

module.exports = {
    entityToDb(entity){
        const map = {
            'id':'id',
            'branch_officeId':'branch_officeId',
            'supermarketId': 'supermarketId',
            'productId': 'productId',
            'quantity': 'quantity',
        }
        return objectMapper(entity, map);
    },
    dbToEntity(db){
        const map = {
            'id':'id',
            'branch_officeId':'branch_officeId',
            'supermarketId': 'supermarketId',
            'productId': 'productId',
            'quantity': 'quantity',
        }
        return objectMapper(db, map);
    }
}