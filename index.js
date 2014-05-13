'use strict';

var gutil = require('gulp-util');
var replace = require('gulp-regex-replace');

function convertVar(nameHash, prefix, v) {
  for (var key in nameHash) {
    if (key == v) {
      return nameHash[v];
    }
  }
  var name = prefix + (Object.keys(nameHash).length + gulpObfuscate.seed);

  nameHash[v] = name;
  if (gulpObfuscate.debug == true) {
    gutil.log('gulp-obfuscate (converting): ' + name + ' <-> ' + v );
  }
  return name;
};

var gulpObfuscate = function(options) {
  if (options == void 0) { options = {}; }

  if (options.exclude == void 0) {
    options.exclude = [];
  }

  if(!(options.exclude instanceof Array)) {
    options.exclude = [options.exclude];
  }

  gulpObfuscate.defaultExclude.forEach(function(element) {
    options.exclude.push(element);
  });

  if (options.replaceMethod == void 0) {
    options.replaceMethod = gulpObfuscate.LOOK_OF_DISAPPROVAL;
  }

  var replaceStr;
  switch(options.replaceMethod) {
    case gulpObfuscate.ZALGO:
      replaceStr = 'H͇̬͔̳̖̅̒ͥͧẸ̖͇͈͍̱̭̌͂͆͊_C͈OM̱̈́͛̈ͩ͐͊ͦEͨ̓̐S̬̘͍͕͔͊̆̑̈́̅';
      break;
    default:
    case gulpObfuscate.LOOK_OF_DISAPPROVAL:
      replaceStr = 'ಠ_ಠ';
      break;
  }

  return replace([
    {
      'regex': [ 'var (.*?[\.;])',
                { include: '([a-zA-Z\__$][0-9a-zA-Z\__$]*?)[(, =;]',
                  exclude: '=[ ]*?([a-zA-Z\__$][0-9a-zA-Z\__$]*?)[(, =;]',
                } ],
      'replace': function(input) {
          return convertVar(gulpObfuscate.nameHash, replaceStr, input);
      },
      'exclude': options.exclude
    },
    {
        'regex': 'function[ ]+([a-zA-Z\__$][0-9a-zA-Z\__$]*?)[ ]*?\\(',
        'replace': function(input) {
            return convertVar(gulpObfuscate.nameHash, replaceStr, input);
        },
        'exclude': options.exclude
    },
    {
        'regex': '\\.([a-zA-Z\__$][0-9a-zA-Z\__$]*?)[ ]*?\\=(?!=)',
        'replace': function(input) {
            return convertVar(gulpObfuscate.nameHash, replaceStr, input);
        },
        'exclude': options.exclude
    },
    {
        'regex': '([a-zA-Z\__$][0-9a-zA-Z\__$]*?):[ ]*?function',
        'replace': function(input) {
            return convertVar(gulpObfuscate.nameHash, replaceStr, input);
        },
        'exclude': options.exclude
    },
    {
        'regex': [ '\\((.*?[\)])[ ]*?{',
                   '([a-zA-Z\__$][0-9a-zA-Z\__$]*?)[ ]*?[),]'
                 ],
        'replace': function(input) {
            return convertVar(gulpObfuscate.nameHash, replaceStr, input);
        },
        'exclude': options.exclude
    },
  ]);
};

gulpObfuscate.init = function() {
  gulpObfuscate.debug = false;
  gulpObfuscate.ZALGO = 0;
  gulpObfuscate.LOOK_OF_DISAPPROVAL = 1;

  gulpObfuscate.nameHash = {};
  gulpObfuscate.minSeed = 1;
  gulpObfuscate.maxSeed = 999;

  gulpObfuscate.defaultReplace = gulpObfuscate.LOOK_OF_DISAPPROVAL;
  gulpObfuscate.defaultExclude = [
      'break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete',
      'do', 'else', 'finally', 'for', 'function', 'if', 'in', 'instanceof',
      'new', 'return', 'switch', 'this', 'throw', 'try', 'typeof', 'var',
      'void', 'while', 'with', 'prototype', 'null', 'true', 'false',
      'undefined', 'NaN', 'Infinity', 'ಠ_ಠ', 'H͇̬͔̳̖̅̒ͥͧẸ̖͇͈͍̱̭̌͂͆͊_C͈OM̱̈́͛̈ͩ͐͊ͦEͨ̓̐S̬̘͍͕͔͊̆̑̈́̅', 'each', 'forEach'
    ];
  gulpObfuscate.seed = Math.floor(Math.random() *
                          (gulpObfuscate.maxSeed - gulpObfuscate.minSeed + 1))
                          + gulpObfuscate.minSeed;
};

gulpObfuscate.init();

module.exports = gulpObfuscate;

gulpObfuscate.init();

module.exports = gulpObfuscate;
