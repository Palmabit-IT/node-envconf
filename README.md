# node-envconf [![Build Status](https://travis-ci.org/Palmabit-IT/node-envconf.svg?branch=master)](https://travis-ci.org/Palmabit-IT/node-envconf)
Environment specific config file


## Installation
```
  npm install node-envconf --save
```

## Usage

  Create a config dir in your project root. Create one or more .json file and name them like yours environments.

  Start your node server:
```
  NODE_ENV=your-env-name node app.js
```

  The module load the the your-env-name.json config file
```
  var config = require('node-envconf').getConf('path-to-my-config-dir');
```
  Get your config like:
```
  config['your-attr-name']['your-nested-attr-name']
```
  or
```
  config.your-attr-name.your-nested-attr-name
```

## Tests
You can run tests locally with
```
  npm test
```  
  The build is continuously run on travis.

## Example
Check test for config example.


## Contributing

* Add tests for any new or changed functionality
* update doc

## Release History

* 0.0.1 Initial release
* 0.0.2 Add TravisCI
* 0.0.3 Update doc

## Author

[palmabit.com](http://www.palmabit.com)


##License

node-env it's free and easy to integrate within your existing projects. [See the MIT License](http://opensource.org/licenses/MIT)
