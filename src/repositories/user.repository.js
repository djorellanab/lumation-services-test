const BaseRepository = require('./base');

class UserRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'users');
  }

  async findByEmail(email){
    let dataDb = await this._db[this._entity].findOne({ 
      where: { email },
      attributes: ['id', 'isAdmin', 'roleId'],
      include: [
        {
          model: this.db['roles'],
          attributes: [],
          include: {
            model: this.db['shortcuts'],
            attributes: ['id']
          }
        },
      {
        model: this.db['permitions'],
        attributes: ['id']
      }] });
    if(!dataDb)
      throw Error('E-NOTFOUND');
    return dataDb;
  }
}

module.exports = UserRepository;
