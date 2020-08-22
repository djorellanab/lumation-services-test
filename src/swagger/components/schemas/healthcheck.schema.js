module.exports = {
    "type": "object",
    "properties":{
        "name":{
            "type":"string"
        },
        "uptime":{
            "type":"decimal"
        }
    },
    "required":[
        "name",
        "uptime"
    ],
    "example":{
        "name": "API",
        "uptime": 100.00
    }
}