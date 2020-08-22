module.exports =         {
    "url": "{protocol}://localhost{port}{base}",
    "description": "It points to developer server",
    "variables":
    {
        "protocol":{
            "enum": ["http", "https"],
            "default": "http"
        },
        "port":{
            "enum": [":3003", ""],
            "default": ":3003"
        },
        "base":{
            "enum": ["/api", ""],
            "default": "/api"
        }
    }
}