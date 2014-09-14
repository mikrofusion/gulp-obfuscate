# gulp-obfuscate [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> [gulp](http://gulpjs.com) plugin to obfuscate your code.

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
```
  function ಠ_ಠ4() {
    var ಠ_ಠ1, ಠ_ಠ2, ಠ_ಠ3;
    ...
    ಠ_ಠ3 = ಠ_ಠ1 + ಠ_ಠ2;
    return ಠ_ಠ3;
  }
```
and this:
```
  function H͇̬͔̳̖̅̒ͥͧẸ̖͇͈͍̱̭̌͂͆͊_C͈OM̱̈́͛̈ͩ͐͊ͦEͨ̓̐S̬̘͍͕͔͊̆̑̈́̅4() {
    var H͇̬͔̳̖̅̒ͥͧẸ̖͇͈͍̱̭̌͂͆͊_C͈OM̱̈́͛̈ͩ͐͊ͦEͨ̓̐S̬̘͍͕͔͊̆̑̈́̅1, H͇̬͔̳̖̅̒ͥͧẸ̖͇͈͍̱̭̌͂͆͊_C͈OM̱̈́͛̈ͩ͐͊ͦEͨ̓̐S̬̘͍͕͔͊̆̑̈́̅2, H͇̬͔̳̖̅̒ͥͧẸ̖͇͈͍̱̭̌͂͆͊_C͈OM̱̈́͛̈ͩ͐͊ͦEͨ̓̐S̬̘͍͕͔͊̆̑̈́̅3;
    ...
    H͇̬͔̳̖̅̒ͥͧẸ̖͇͈͍̱̭̌͂͆͊_C͈OM̱̈́͛̈ͩ͐͊ͦEͨ̓̐S̬̘͍͕͔͊̆̑̈́̅3 = H͇̬͔̳̖̅̒ͥͧẸ̖͇͈͍̱̭̌͂͆͊_C͈OM̱̈́͛̈ͩ͐͊ͦEͨ̓̐S̬̘͍͕͔͊̆̑̈́̅1 + H͇̬͔̳̖̅̒ͥͧẸ̖͇͈͍̱̭̌͂͆͊_C͈OM̱̈́͛̈ͩ͐͊ͦEͨ̓̐S̬̘͍͕͔͊̆̑̈́̅2;
    return H͇̬͔̳̖̅̒ͥͧẸ̖͇͈͍̱̭̌͂͆͊_C͈OM̱̈́͛̈ͩ͐͊ͦEͨ̓̐S̬̘͍͕͔͊̆̑̈́̅3;
  }
```

--

##### See a working example [here](http://mikrofusion.github.io/gulp-obfuscate/)

--

## API

### obfuscate(options)

#### options.replaceMethod

Type: `ZALGO` or `LOOK_OF_DISAPPROVAL`

Default:  `LOOK_OF_DISAPPROVAL`

Example:

```js
obfuscate = require('gulp-obfuscate');
...
.pipe(obfuscate({ replaceMethod: obfuscate.ZALGO }))
...
```

Note: Both obfuscation methods create valid javascript variables per ECMAScript 5.1.
That said, there is no guarantee that older browsers can handle the mighty power of ZALGO.


#### options.exclude

Type: `String` or `Array of Strings`

Default: `'break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete',
          'do', 'else', 'finally', 'for', 'function', 'if', 'in', 'instanceof',
          'new', 'return', 'switch', 'this', 'throw', 'try', 'typeof', 'var',
          'void', 'while', 'with', 'prototype', 'null', 'true', 'false', 'NaN',
          'undefined', 'Infinity', 'ಠ_ಠ', 'H͇̬͔̳̖̅̒ͥͧẸ̖͇͈͍̱̭̌͂͆͊_C͈OM̱̈́͛̈ͩ͐͊ͦEͨ̓̐S̬̘͍͕͔͊̆̑̈́̅'`

Values: `do_not_replace`, `abc`, `...`

Regular expressions to be globally excluded from obfuscation.  Current defaults include javascript reserved words.
Custom exclusions are often needed for variables or functions that need to stay named the same (such as interfaces to other code).

Note:  defaults will be automatically appended to any options.exclude variables provided.

See [gulp-regex-replace](https://github.com/mikrofusion/gulp-regex-replace) documentation for more details.

## License

[MIT](http://opensource.org/licenses/MIT) © [Mike Groseclose](//github.com/mikrofusion)

[npm-url]: https://npmjs.org/package/gulp-obfuscate
[npm-image]: https://badge.fury.io/js/gulp-obfuscate.png

[travis-url]: http://travis-ci.org/mikrofusion/gulp-obfuscate
[travis-image]: https://secure.travis-ci.org/mikrofusion/gulp-obfuscate.png?branch=master
