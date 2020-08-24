const {Branch_OfficeMapping} = require("./mappings")
const BaseService = require("./base")
const { v4: uuidv4 } = require('uuid');

class Branch_OfficeService extends BaseService{
    constructor({ Branch_OfficeRepository }) {
        super(Branch_OfficeRepository, Branch_OfficeMapping);
    }

    async getByBusinessIds(getByBusinessIds){
        let entities = await this._entityRepository.getByBusinessIds(getByBusinessIds);
        return await entities.map((x) => x.id);
    }

    async create(entity) {
        entity.id = uuidv4();
        return super.create(entity);
      }
}
module.exports = Branch_OfficeService;