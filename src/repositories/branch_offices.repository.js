const BaseRepository = require('./base');

class Branch_OfficeRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'branch_offices');
  }

  async create(branch_office){
    const {sequenceHelper} = require("../helpers");
    branch_office.businessId = sequenceHelper.nextValBusiness(this._db);
    return await super.create(branch_office);
  }

  async getByBusinessIds(getByBusinessIds){
    return await this._db[this._entity].findAll({
       where: { businessId:{
         [this._db.Sequelize.Op.in]: getByBusinessIds
       } },
       attributes: ['id'] });
  }
}

module.exports = Branch_OfficeRepository;
