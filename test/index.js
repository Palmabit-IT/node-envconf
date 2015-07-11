var chai = require('chai'),
  expect = chai.expect,
  should = chai.should(),
  assert = chai.assert,
  path = require('path'),
  config = require('../index');

chai.use(require('chai-fs'));

var config_dir_test = 'test' + '/config/env';

describe('#getConfigDir', function() {

  it('throw error if file is passed instead the dir name', function() {
    try {
      config.getConfigDir(config_dir_test + '/development.json');
    }
    catch (err) {
      expect(err).to.eql(new Error());
    }
  });

  it('check if config path is dir', function() {
    var config_dir = config.getConfigDir(config_dir_test);
    assert.isDirectory(config_dir, 'no dir founded');
  });

});

describe('#getEnv', function() {

  it('should return ”development” if NODE_ENV is not set', function() {
    var env = config.getEnv();
    env.should.equal('development');
  });

  it('should return user NODE_ENV if NODE_ENV is set', function() {
    var custom_env = process.env.NODE_ENV = 'staging';
    var env = config.getEnv();
    env.should.equal(custom_env);
    //fix for other tests
    process.env.NODE_ENV = 'development';
  });

});

describe('#getConf', function() {

  it('throw error if file doesn\'t exsist', function() {
    process.env.NODE_ENV = 'dummy-env';
    expect(
    function () {
      config.getConf(config_dir_test);
    }).to.throw(Error);
    process.env.NODE_ENV = 'development';
  });

  it('throw error if file is not format as JSON', function() {
    process.env.NODE_ENV = 'development_wrong';
    expect(
      function () {
        config.getConf(config_dir_test);
      }
    ).to.throw(Error);
  });

  it('should return a json object', function() {
    process.env.NODE_ENV = 'development';
    config.getConf(config_dir_test);
  });

});
