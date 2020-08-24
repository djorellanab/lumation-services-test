class BaseService {
    constructor(EntityRepository, wrapper) {
      this._entityRepository = EntityRepository;
      this._wrapper = wrapper;
    }
    
    async getAll() {
      let entities = await this._entityRepository.getAll();
      let wrapper = this._wrapper;
      entities = await entities.map(function (entity){
        return wrapper.dbToEntity(entity);
      });
      return entities;
    }
    
    async get(id) {
      let entity = await this._entityRepository.get(id);
      return this._wrapper.dbToEntity(entity);
    }
    
    async create(entity) {
      const createdEntity = await this._entityRepository.create(this._wrapper.entityToDb(entity));
    }
    
    async update(id, entity) {
      const updatedEntity = await this._entityRepository.update(id, entity);
      return updatedEntity;
    }
    
    async delete(id) {
      const deletedEntity = await this._entityRepository.delete(id);
      return deletedEntity;
    }
  }
    
  module.exports = BaseService;
  