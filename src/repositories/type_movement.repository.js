const BaseRepository = require('./base');

class Type_MovementRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'type_movements');
  }
}

module.exports = Type_MovementRepository;
