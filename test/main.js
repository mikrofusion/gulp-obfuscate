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

  describe('given a list of words as input', function() {
    describe('and a regular expression given as an option', function() {
      var options = {regex: '__v_[_A-Za-z0-9]+__', prefix:'v'};
      it('obfuscates any words matching the regular expression', function (done) {
        expect_equals('Lorem ipsum __v_dolor__ sit amet.  __v_change__.',
                      'Lorem ipsum v1 sit amet.  v2.', done, options);
      });
    });
  });
});
