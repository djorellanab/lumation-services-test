const {UserMapping} = require("./mappings")
const BaseService = require("./base")
const { v4: uuidv4 } = require('uuid');

class UserService extends BaseService{
    constructor({ UserRepository }) {
        super(UserRepository, UserMapping);
    }

    async login(entity){
        let user = this._wrapper.entityToDb(entity);
        let dbUser = this._entityRepository.findByEmail(user.email);
        if(!dbUser.validPassword(user.password))
            throw Error('E-UNAUTHORIZED');
        dbUser = this._wrapper.dbToJwt(dbUser);
        const {jwtHelper} = require("../helpers");
        return {token: jwtHelper.sign({dbUser})}
    }
    
    async create(entity) {
        entity.id = uuidv4();
        entity.isAdmin = (entity.roleId === "c22ebda0-23ca-48bb-a604-a439853f6675");
        return super.create(entity);
      }
}
module.exports = UserService;