const {SupermarketMapping} = require("./mappings")
const BaseService = require("./base")
const { v4: uuidv4 } = require('uuid');

class SupermarketService extends BaseService{
    constructor({ SupermarketRepository }) {
        super(SupermarketRepository, SupermarketMapping);
    }

    async getByBusinessIds(getByBusinessIds, isSupermarket){
        let entities = await this._entityRepository.getByBusinessIds(getByBusinessIds);
        if(isSupermarket){
            return await entities.map((x) => x.id);
        }else{
            let tmp = a.map((x) => x.branch_offices);
            tmp = tmp.reduce((acc,val) => {
                return acc.concat(val)
            });
            tmp = tmp.map((x) => x.id);
            return [...new Set(tmp)];
        }
    }

    async create(entity) {
        entity.id = uuidv4();
        return super.create(entity);
      }
}
module.exports = SupermarketService;