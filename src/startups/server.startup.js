const express = require('express');

class Server {

    constructor({ configs, RouterStartup }) {
      this._configs = configs;
      this._express = express().use(RouterStartup);
      this._express.disable('x-powered-by');
      this._server = null;
    }
  
    start() {
      return new Promise(resolve => {
        this._server =this._express.listen(this._configs.site.port, () => {
          console.log(`${this._configs.site.name} running on port ${this._configs.site.port}`);
          resolve();
        });
      });
    }
  
    stop() {
      return new Promise(resolve => {
        this._server.close(() =>{
          console.log('server turned off');
          resolve();
        });
      });
    }
}
  
module.exports = Server;
  