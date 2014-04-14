# gulp-obfuscate [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> [gulp](http://gulpjs.com) plugin to obfuscates your code using [gulp-regex-replace](https://github.com/mikegroseclose/gulp-regex-replace).

## Install

```bash
$ npm install --save-dev gulp-obfuscate
```

## Usage

```js
var gulp = require('gulp');
var obfuscate = require('gulp-obfuscate');

gulp.task('default', function () {
	return gulp.src('test.js')
		.pipe(obfuscate({regex:'_v_[_A-Za-z0-9]+_'}))
    .pipe(obfuscate({regex:'_f_[_A-Za-z0-9]+_', prefix: 'f'}));
});
```
## Example

The default gulp task above will output the following

```js
function f4(v1, v2) {
  var v3 = v1 + v2;
  return v3;
}

```

from the input below

```js
function _f_sum_(_v_a_, _v_b_) {
  var _v_sum_ = _v_a_ + _v_b_;
  return _v_sum_;
}
```

## API

### obfuscate(options)

#### options.regex

Type: `String`

Default: ` `

Values: `word`, `__v_[_A-Za-z0-9]+__`, `...`

The regular expresion used to match strings that should be obfuscated.

#### options.prefix

Type: `String`

Default: `'v'`

Values: `var`, `func`, `abc`, `...`

The string that will prefix all obfuscated strings.
Obfuscated strings will be of the form \<prefix>\<integer>.

## License

[MIT](http://opensource.org/licenses/MIT) © Mike Groseclose

[npm-url]: https://npmjs.org/package/gulp-obfuscate
[npm-image]: https://badge.fury.io/js/gulp-obfuscate.png

[travis-url]: http://travis-ci.org/mikegroseclose/gulp-obfuscate
[travis-image]: https://secure.travis-ci.org/mikegroseclose/gulp-obfuscate.png?branch=master
