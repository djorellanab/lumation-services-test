const BaseRepository = require('./base');

class ProductRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'products');
  }
}

module.exports = ProductRepository;
