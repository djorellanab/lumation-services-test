const objectMapper = require('object-mapper');

module.exports = {
    entityToDb(user){
        const map = {
            'id':'id',
            'email':'email',
            'password': 'password',
            'rolId': 'rolId',
            'isAdmin': 'isAdmin' 
        }
        return objectMapper(user, map);
    },
    dbToEntity(db){
        const map = {
            'id':'id',
            'email':'email',
            'rolId': 'rolId',
            'isAdmin': 'isAdmin' 
        }
        return objectMapper(db, map);
    },
    dbToJwt(db){
        const map = {
            "id":"id",
            "isAdmin":"isAdmin",
            "roleId": "roleId",
            "role.shortcuts": {
                key: "shortcuts?",
                transform: function (value) {
                    if(!value)
                        return [];
                    return value.map((x) => x.id);
                }
            },
            "permitions": {
                key:"permitions?",
                transform: function (value) {
                    if(!value)
                        return [];
                    return value.map((x) => x.id);
                }
            }
        };
        return objectMapper(db, map);
    }
}