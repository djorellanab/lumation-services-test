const {jwtHelper} = require("../helpers")
class AuthenticationMiddleware{
    constructor(){
    }
    async getStatus(req, res, next){
        try {
            const authorization = req.headers.authorization || '';
            const token = authorization.replace('Bearer ', '');
            req.userJwt = jwtHelper.verify(token);
            next();
        } catch (error) {
            return res.status(401).json({message: 'unauthorized'});
        }
    }
}

module.exports = AuthenticationMiddleware;