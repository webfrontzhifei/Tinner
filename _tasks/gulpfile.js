var gulp = require('gulp'),
    path = require('path'),
    requireDir = require('require-dir');

requireDir('./tasks', { recurse: true });

process.env.PWD = process.env.PWD || path.resolve(process.cwd(), '../../');

global.PATH_CONFIG = require('./lib/get-path-config');
global.TASK_CONFIG = require('./lib/get-task-config');

gulp.task('default', ['stylesheets'], function() {
    console.log('test');
})
