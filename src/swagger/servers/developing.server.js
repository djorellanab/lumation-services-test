module.exports =         {
    "url": "{protocol}://localhost{base}",
    "description": "server for developer",
    "variables":
    {
        "protocol":{
            "enum": ["http", "https"],
            "default": "http"
        },
        "base":{
            "enum": ["/wp-json/api/v1", ""],
            "default": "/wp-json/api/v1"
        }
    }
}