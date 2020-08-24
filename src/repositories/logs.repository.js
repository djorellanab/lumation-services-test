const BaseRepository = require('./base');

class LogRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'logs');
  }
}

module.exports = LogRepository;
