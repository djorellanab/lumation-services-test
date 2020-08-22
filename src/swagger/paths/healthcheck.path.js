module.exports = {
    "get":
    {
        "tags": ["healthcheck"],
        "summary": "Status of API",
        "description": "This endpoint gives information about the API",
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
                            "$ref": "#/components/schemas/Healthcheck"
                        }
                    }
                }
            }
        }
    }
};