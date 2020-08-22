const {api} = require("../../configs");
function getDescription (){
    let description = "";
    description += "This is documentations about the services of wordpress: \r\n";
    description += "* Services: \r\n";
    description += `\t * [Wordpress:](#wordpress) \r\n`
    description += `\t\t * [WP-JSON:GET](#wordpress/service-wordpress-get-wpjson) \r\n`;
    return description;
}
module.exports =     {
    "description": getDescription(),
    "version": "1.0.0",
    "title": "API Wordpress"
}