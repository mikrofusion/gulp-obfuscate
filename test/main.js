'use strict';

var obfuscate = require('../'),
    es        = require('event-stream'),
    gutil     = require('gulp-util'),
    should    = require('should');

function generateFile(contents) {
  if (contents == void 0) {contents = ''; }

  return new gutil.File({
    path: './testfile.js',
    cwd: './',
    base: './',
    contents: new Buffer(contents)
  });
}

function expect_equals(input, output, done, options) {
  obfuscate.init();
  obfuscate.seed = 1; // override seed for tests
  var stream = obfuscate(options);

  stream.on('data', function(file) {
    String(file.contents).should.equal(output);
    done();
  });

  stream.write(generateFile(input));
  stream.end();
}

describe('gulp-obfuscate', function() {
  describe('when given an empty input buffer', function() {
    it('does nothing', function(done) {
      expect_equals('', '', done);
    });
  });

  describe('given a string with javascript variables', function() {
      it('obfuscates any javascript variables', function (done) {
        expect_equals('var variable1 = 0; var variable2 = 0; var variable3, variable4; variable5;',
                      'var ಠ_ಠ1 = 0; var ಠ_ಠ2 = 0; var ಠ_ಠ3, ಠ_ಠ4; variable5;', done, void 0);
      });

      it('obfuscates any javascript prototype variables', function (done) {
        expect_equals('var abc; abc.xyz = 1.0; if(abc.length == 1)',
                      'var ಠ_ಠ1; ಠ_ಠ1.ಠ_ಠ2 = 1.0; if(ಠ_ಠ1.length == 1)', done, void 0);
      });

      it('obfuscates any variables passed to functions', function (done) {
        expect_equals('function abc(def){}; abc(def, hij) {',
                      'function ಠ_ಠ1(ಠ_ಠ2){}; ಠ_ಠ1(ಠ_ಠ2, ಠ_ಠ4) {', done, void 0);
      });

      it('doesnt fail on input string test 1', function(done) {
        expect_equals('.forEach = function', '.forEach = function', done, void 0);
      });

      it('doesnt fail on input string test 2', function(done) {
        expect_equals('.indexOf = function', '.ಠ_ಠ1 = function', done, void 0);
      });

      it('doesnt fail on input string test 3', function(done) {
        expect_equals('this.length = 1', 'this.ಠ_ಠ1 = 1', done, void 0);
      });
  });

  describe('given a string with javascript functions', function() {
      it('obfuscates any function names', function (done) {
        expect_equals('function abc(123) {}; var cde; function foo(',
                      'function ಠ_ಠ2(123) {}; var ಠ_ಠ1; function ಠ_ಠ3(', done, void 0);
      });
  });

  describe('given a hash of javascript functions', function() {
      it('obfuscates any function names', function (done) {
        expect_equals('abc: function(123) {}, def: function(',
                      'ಠ_ಠ1: function(123) {}, ಠ_ಠ2: function(', done, void 0);
      });
  });

  describe('given a list of words as input', function() {
    describe('and an exclude list', function() {
      it('does not replace excluded variables', function (done) {
        var options = { exclude: 'dn.*' }
        expect_equals('var variabl1 = 0; var dnr; var variable2 = 0; var variable3, variable4; variable5;var v = B.C.M.b;',
                      'var ಠ_ಠ1 = 0; var dnr; var ಠ_ಠ3 = 0; var ಠ_ಠ4, ಠ_ಠ5; variable5;var ಠ_ಠ6 = B.C.M.b;', done, options);
      });

      it('it does not replace javascript keywords', function (done) {
        expect_equals('var list; for (var i in list; i < 10; i++) {',
                      'var ಠ_ಠ1; for (var ಠ_ಠ2 in ಠ_ಠ1; ಠ_ಠ2 < 10; ಠ_ಠ2++) {', done, void 0);
      });
    });
  });

  describe('given a replace option to summon zalgo', function() {
    it('H͇̬͔̳̖̅̒ͥͧẸ̖͇͈͍̱̭̌͂͆͊_C͈OM̱̈́͛̈ͩ͐͊ͦEͨ̓̐S̬̘͍͕͔͊̆̑̈́̅', function(done) {
      var options = { replaceMethod: obfuscate.ZALGO };
      expect_equals('var zalgo;', 'var H͇̬͔̳̖̅̒ͥͧẸ̖͇͈͍̱̭̌͂͆͊_C͈OM̱̈́͛̈ͩ͐͊ͦEͨ̓̐S̬̘͍͕͔͊̆̑̈́̅1;', done, options);
    });
  });

});
