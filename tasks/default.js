'use strict';

let gulp = require('gulp');

let tasks = [
  'styles',
  'scripts',
  'templates',
  'browser-sync',
  'watch',
  'imgs',
];

gulp.task('default', tasks);
