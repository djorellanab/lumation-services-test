const BaseRepository = require('./base');

class MovementRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'movements');
  }
}

module.exports = MovementRepository;
