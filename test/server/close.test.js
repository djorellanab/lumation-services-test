let chai = require('chai');
let should = chai.should();

const close = function (server) {
  describe('It closes the server', function (){
    it('server stops',function (done){
        server.stop();
        done();
    });
  });
};

module.exports = close;