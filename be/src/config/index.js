const path = require('path'),
  _ = require('lodash'),
  fs = require('fs-extra');

const defaultConfig = require('./default.js');
const envJsonPath =
  process.cwd() + '/.env/' + (process.env.NODE_ENV || 'development') + '.json';
fs.ensureFileSync(envJsonPath);
let envConfig = fs.readJsonSync(envJsonPath, { throws: false });
var result = _.merge({}, defaultConfig, envConfig);

module.exports = result;
