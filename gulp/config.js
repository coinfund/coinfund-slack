/*
* @Author: Jake Brukhman
* @Date:   2016-04-03 17:10:55
* @Last Modified by:   Jake Brukhman
* @Last Modified time: 2017-01-15 18:56:17
*/

'use strict';

var gulp = require('gulp');
var fs = require('fs');
var argv = require('yargs').argv;
var ngConstant = require('gulp-ng-constant');

// get the parameters
var env = argv.env || 'server';

// `config` can now be used in other gulp tasks
global.config = JSON.parse(fs.readFileSync('src/app/config.json', 'utf8'))[env];

// create the task
gulp.task('config', function () {
  return ngConstant({
    name: 'coinfund.config',
    constants: config,
    stream: true,
    wrap: 'commonjs',
  })
  .pipe(gulp.dest('src/app/config'));
});

