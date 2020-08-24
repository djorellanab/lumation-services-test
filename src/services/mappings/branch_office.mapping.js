const objectMapper = require('object-mapper');

module.exports = {
    entityToDb(entity){
        const map = {
            'id':'id',
            'supermarketId':'supermarketId',
            'name': 'name',
            'businessId': 'businessId' 
        }
        return objectMapper(entity, map);
    },
    dbToEntity(db){
        const map = {
            'id':'id',
            'supermarketId':'supermarketId',
            'name': 'name',
            'rolId': 'rolId',
            'businessId': 'businessId' 
        }
        return objectMapper(db, map);
    }
}