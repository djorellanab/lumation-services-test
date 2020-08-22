module.exports = {
    "get":
    {
        "tags": ["wordpress"],
        "operationId": "service-wordpress-get-wpjson",
        "summary": "Enpoint index API",
        "description": "Endpoint gets status of API (Giving details of API)",
        "produces": ["application/json"],
        "responses":
        {
            "200":
            {
                "description": "OK",
                "content":
                {
                    "application/json":{
                        "schema":{
                            "$ref": "#/components/schemas/Wpjson"
                        }
                    }
                }
            }
        }
    }
};