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

gulp-obfuscate obfuscates your javascript code so that it looks like this:
```js
  function ಠ_ಠ4() {
    var ಠ_ಠ1, ಠ_ಠ2, ಠ_ಠ3;
    ...
    ಠ_ಠ3 = ಠ_ಠ1 + ಠ_ಠ2;
    return ಠ_ಠ3;
  }
```

when given the following code:

```js
  function func() {
    var abc, v1, v2;
    ...
    abc = v1 + v2;
    return abc;
  }
```

## API

### obfuscate(options)

#### options.exclude

Type: `String` or `Array of Strings`

Default: `'break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete',
          'do', 'else', 'finally', 'for', 'function', 'if', 'in', 'instanceof',
          'new', 'return', 'switch', 'this', 'throw', 'try', 'typeof', 'var',
          'void', 'while', 'with'`

Values: `do_not_replace`, `abc`, `...`

Regular expressions to be globally excluded from obfuscation.  Current defaults are javascript reserved words.
This is often needed for variables or functions that need to stay named the same (such as interfaces to other code).

Note:  defaults will be automatically appended to any options.exclude variables provided.

See [gulp-regex-replace](//github.com/mikegroseclose/gulp-regex-replace) documentation for more details.

## License

[MIT](http://opensource.org/licenses/MIT) © Mike Groseclose

[npm-url]: https://npmjs.org/package/gulp-obfuscate
[npm-image]: https://badge.fury.io/js/gulp-obfuscate.png

[travis-url]: http://travis-ci.org/mikegroseclose/gulp-obfuscate
[travis-image]: https://secure.travis-ci.org/mikegroseclose/gulp-obfuscate.png?branch=master
