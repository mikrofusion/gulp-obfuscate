'use strict';

var gutil = require('gulp-util');
var replace = require('gulp-regex-replace');

function convertVar(nameArray, prefix, v) {
  if (v in nameArray) { return nameArray[v]; }

  var name = prefix + (Object.keys(nameArray).length + gulpObfuscate.seed);
  nameArray[v] = name;
  return name;
};

var gulpObfuscate = function(options) {
  if (options == void 0) { options = {}; }

  if (options.regex == void 0) {
    options.regex = gulpObfuscate.defaultRegex;
  }

  if (options.prefix == void 0) {
    options.prefix = gulpObfuscate.defaultPrefix;
  }

  return replace({
    'regex': options.regex,
    'replace': function(input) {
        return convertVar(gulpObfuscate.nameArray, options.prefix, input);
    }
  });
};

gulpObfuscate.init = function() {
  gulpObfuscate.nameArray = [];
  gulpObfuscate.minSeed = 1;
  gulpObfuscate.maxSeed = 999;
  gulpObfuscate.defaultRegex = [ 'var (.*?;)', { include: '([a-zA-Z0-9_$]+)[, =;]', exclude: '=[ ]*?([a-zA-Z0-9_$]+)[, =;]' } ];
  gulpObfuscate.defaultPrefix = 'v'
  gulpObfuscate.seed = Math.floor(Math.random() *
                          (gulpObfuscate.maxSeed - gulpObfuscate.minSeed + 1))
                          + gulpObfuscate.minSeed;
};

gulpObfuscate.init();

module.exports = gulpObfuscate;
