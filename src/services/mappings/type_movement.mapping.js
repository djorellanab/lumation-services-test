const objectMapper = require('object-mapper');

module.exports = {
    entityToDb(entity){
        const map = {
            'id':'id',
            'name':'name',
            'isInput': 'isInput'
        }
        return objectMapper(entity, map);
    },
    dbToEntity(db){
        const map = {
            'id':'id',
            'name':'name',
            'isInput': 'isInput'
        }
        return objectMapper(db, map);
    }
}