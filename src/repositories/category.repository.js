const BaseRepository = require('./base');

class CategoryRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'categories');
  }
}

module.exports = CategoryRepository;
