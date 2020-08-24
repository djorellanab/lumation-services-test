const objectMapper = require('object-mapper');

module.exports = {
    entityToDb(entity){
        const map = {
            'id':'id',
            'shortcutId':'shortcutId',
            'metadata':'metadata'
        }
        return objectMapper(entity, map);
    },
    dbToEntity(db){
        const map = {
            'id':'id',
            'shortcutId':'shortcutId',
            'metadata':'metadata'
        }
        return objectMapper(db, map);
    }
}