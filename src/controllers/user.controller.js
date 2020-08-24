const BaseController = require('./base');

class UserController extends BaseController{
    constructor({ UserService }) {
        super(UserService);
    }

    async login(req, res) {
      try {
        let token = await this._entityService.login(req.body);
        return res.status(201).send(token);
      } catch (error) {
        if(error.message == "E-UNAUTHORIZED"){
          return res.status(401).send({message:"You should check if your email and password are correct"});
        }else if(error.message == "E-NOTFOUND"){
          return res.status(404).send({message:"Your email is not registered"});
        }else{
          return res.status(500).send({message:error.message});
        }
      }
    }

    async create(req, res, next) {
        try{
          await this._entityService.create(req.body);
          req.hasLog = true;
          next();
        }catch(error){
          if(error.message == "E-NOTUNIQUE"){
            return res.status(409).send({message:"Conflict, User had created"});
          }else{
            return res.status(500).send({message:error.message});
          }
        }
      }
}
module.exports = UserController;