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
		.pipe(obfuscate());
});
```
## Example

By default, gulp-obfuscate attempts to obfuscate javascript variables.
The default settings will give the following output:

```js
  var v1, v2 = ghi;
  return v2;
```

from the input below:

```js
  var abc, def = ghi;
  return def;
```

## API

### obfuscate(options)

#### options.regex

Type: `String`, `Array of Strings`, or `Key/value with 'include' and 'exclude' as keys`

Default: `[ 'var (.*?;)', { include: '([a-zA-Z0-9_$]+)[, =;]', exclude: '=[ ]*?([a-zA-Z0-9_$]+)[, =;]' } ]`

Values: `word`, `__v_[_A-Za-z0-9]+__`, `...`

The regular expresions used to match strings that should be obfuscated.

See [gulp-regex-replace](//github.com/mikegroseclose/gulp-regex-replace) documentation for more details.

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
