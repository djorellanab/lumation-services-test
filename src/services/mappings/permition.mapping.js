const objectMapper = require('object-mapper');

module.exports = {
    entityToDb(entity){
        const map = {
            'id':'id',
            'businessId':'businessId',
            'userId':'userId',
            'object':'object'
        }
        return objectMapper(entity, map);
    },
    dbToEntity(db){
        const map = {
            'id':'id',
            'businessId':'businessId',
            'userId':'userId',
            'object':'object'
        }
        return objectMapper(db, map);
    }
}