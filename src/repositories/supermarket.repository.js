const BaseRepository = require('./base');

class SupermarketRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'supermarkets');
  }

  async create(supermarket){
    const {sequenceHelper} = require("../helpers");
    supermarket.businessId = sequenceHelper.nextValBusiness(this._db);
    return await super.create(supermarket);
  }

  async getByBusinessIds(getByBusinessIds){
    return await this._db[this._entity].findAll({
       where: { businessId:{
         [this._db.Sequelize.Op.in]: getByBusinessIds
       },
       include:[
        {
          model: this.db['branch_offices'],
          attributes: ['id']
        }
       ] },
       attributes: ['id'] });
  }
}

module.exports = SupermarketRepository;
