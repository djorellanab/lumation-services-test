module.exports = {
    "post":
    {
        "tags": ["users"],
        "summary": "to create an user",
        "description": "This endpoint register an user",
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters":[
            {"in":"body",
            "name": "User",
            "description": "The user to create",
            "schema":{"$ref": "#/components/schemas/User"}}
        ],
        "responses":
        {
            "201":{
                "description": "User was created"
            },
            "409":{
                "description": "Conflict, User had created"
            },
            "422":{
                "description": "Unprocessable entity"
            },
            "500":{
                "description": "Error on the server"
            },
        }
    }
};