const BaseRepository = require('./base');

class PermitionRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'permitions');
  }
}

module.exports = PermitionRepository;
