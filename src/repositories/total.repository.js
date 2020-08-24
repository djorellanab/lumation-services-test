const BaseRepository = require('./base');

class TotalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'totals');
  }
}

module.exports = TotalRepository;
