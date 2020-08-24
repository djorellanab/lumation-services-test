require('dotenv').config();

module.exports = {
    admin: require("./admin.config"),
    crypt: require("./crypt.config"),
    database: require("./database.config"),
    jwt: require("./jwt.config"),
    site: require("./site.config")
};