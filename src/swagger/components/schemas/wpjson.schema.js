module.exports = {
    "type": "object",
    "properties":{
        "name":{
            "type":"string"
        },
        "description":{
            "type":"string"
        },
        "url":{
            "type":"string"
        },
        "home":{
            "type":"string"
        },
        "gmt_offset":{
            "type":"string"
        },
        "timezone_string":{
            "type":"string"
        },
        "namespaces":{
            "type":"array",
            "items":{
                "type":"string"
            }
        }
    },
    "required":[
        "name",
        "description",
        "home",
        "gmt_offset",
        "namespaces"
    ],
    "example":{
        "name": "My Blog",
        "description": "http://localhost",
        "home": "http://localhost",
        "gmt_offset": 	"0",
        "namespaces":[
            "oembed/1.0",
            "wp/v2"
        ]
    }
}