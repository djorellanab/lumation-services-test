const jwtConfig = require('../configs/jwt.config');
const jwt = require('jsonwebtoken');

module.exports = {
    sign(payload){
        return jwt.sign(payload, jwtConfig.secret);
    },
    verify(token){
        return new Promise(function(resolve, reject){
            jwt.verify(token, jwtConfig.secret, function(err, decode){
                if (err){
                    reject(err)
                    return
                }
                resolve(decode)
            })
        });
    }
}