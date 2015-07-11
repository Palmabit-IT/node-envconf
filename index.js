var path = require('path'),
  fs = require('fs');

module.exports = {

  getConfigDir: function(config_dir) {

    var config_path = process.cwd() + '/' + config_dir;
    if (fs.lstatSync(config_path).isDirectory()) {
      return config_path;
    } else {
      throw new Error();
    }

  },

  getEnv: function() {
    return (process.env.NODE_ENV ? process.env.NODE_ENV : 'development');
  },

  getConf: function(config_dir) {
    try {
      return require(this.getConfigDir(config_dir) + '/' + this.getEnv() + '.json');
    } catch (err) {
      if (err.code && err.code === 'MODULE_NOT_FOUND') {
        throw new Error('No config file for NODE_ENV: ' + process.env.NODE_ENV);
      } else {
        throw err;
      }
    }

  }

};
