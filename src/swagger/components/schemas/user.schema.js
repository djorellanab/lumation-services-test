module.exports = {
    "type": "object",
    "properties":{
        "id":{
            "type":"uuid"
        },     
        "email":{
            "type":"string"
        },
        "password":{
            "type":"string"
        },
        "roleId":{
            "type":"uuid"
        },
        "isAdmin":{
            "type":"boolean"
        }
    },
    "required":[
        "email",
        "password",
        "roleId",
        "isAdmin"
    ],
    "example":{
        "id": "18a30230-1bf4-47ff-9ff9-7bab0dae5951",
        "email": "djorellanab@outlook.com",
        "password": "123456",
        "roleId": "942872d4-e2fb-4dc8-b5e3-341a60b4bb56",
        "isAdmin": "false"
    }
}