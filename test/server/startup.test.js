let chai = require('chai');
let should = chai.should();

let containers = require('../../src');
const ServerStartup = containers.resolve('ServerStartup');

describe('Instance of the server', function (){

    it('to start the terver', function (done)  {
        ServerStartup.start();
        done();
    });
   
});
  
module.exports = ServerStartup;