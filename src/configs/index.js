require('dotenv').config();

module.exports = {
    database: require("./database.config"),
    jwt: require("./jwt.config"),
    site: require("./site.config")
};