const { compareSync, genSaltSync, hashSync } = require('bcryptjs');
const {crypt} = require("../configs")

module.exports = {
    hash: function(string){
        const salt = genSaltSync(crypt.rounds);
        return hashSync(string, salt);
    },
    compareString: function(string, hash){
        return compareSync(string, hash);
    }
}