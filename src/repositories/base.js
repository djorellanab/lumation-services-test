class BaseRepository {
    constructor(db, entity) {
      this._db = db;
      this._entity = entity;
    }

    async getAll() {
      return await this._db[this._entity].findAll();
    }
    
    async get(id) {
      let data = await this._db[this._entity].findOne({ where: { id } });
      if(!data)
        throw Error('E-NOTFOUND');
      return data;
    }
    
    async create(entity) {
      try {
        return await this._db[this._entity].create(entity); 
      } catch (error) {
        if (error.parent.code == '23505')
          throw Error("E-NOTUNIQUE");
        else
          throw error;
      }
    }
    
    async update(id, entity) {
      let data = await this._db[this._entity].update(entity, { where: { id } });
      if(data[0]===0)
        throw Error('E-NOTFOUND');
      return data;
    }
    
    async delete(id) {
      let data = await this._db[this._entity].destroy({ where: { id } });
      if(data===0)
        throw Error('E-NOTFOUND');
      return data;
    }
    
  }
    
  module.exports = BaseRepository;
  