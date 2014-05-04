'use strict'

gulp      = require 'gulp'
coffee    = require 'gulp-coffee'
util      = require 'gulp-util'
plumber   = require 'gulp-plumber'
uglify    = require 'gulp-uglify'
obfuscate = require '../'

gulp.task 'scripts', ->
  # convert coffeescript, concat all files into one
  gulp.src 'src/**/*.coffee'
    .pipe plumber()
    .pipe coffee bare: true
    .pipe obfuscate({exclude: ['CalcCtrl', 'left', 'right', 'result', 'name', 'operators', 'operator'], replaceMethod: obfuscate.ZALGO})
    .pipe uglify mangle:false
    .pipe gulp.dest 'public'

gulp.task 'default', [ 'scripts' ]
