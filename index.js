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

gulpObfuscator.init = function() {
  gulpObfuscator.nameArray = [];
  gulpObfuscator.minSeed = 1;
  gulpObfuscator.maxSeed = 999;
  gulpObfuscator.defaultRegex = void 0;
  gulpObfuscator.defaultPrefix = 'v'
  gulpObfuscator.seed = Math.floor(Math.random() *
                          (gulpObfuscator.maxSeed - gulpObfuscator.minSeed + 1))
                          + gulpObfuscator.minSeed;
};

gulpObfuscator.init();

module.exports = gulpObfuscator;
