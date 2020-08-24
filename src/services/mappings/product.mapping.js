const objectMapper = require('object-mapper');

module.exports = {
    entityToDb(entity){
        const map = {
            'id':'id',
            'name':'name',
            'idCategory':'idCategory',
            'minimum':'minimum'
        }
        return objectMapper(entity, map);
    },
    dbToEntity(db){
        const map = {
            'id':'id',
            'name':'name',
            'idCategory':'idCategory',
            'minimum':'minimum'
        }
        return objectMapper(db, map);
    }
}