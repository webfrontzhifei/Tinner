if(!TASK_CONFIG.stylesheets) return

var gulp = require('gulp');

var sassTsk = function () {
  var path = {
    src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.stylesheets.src, '**/*.sass'),
    dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.stylesheet.dest)
  }

  return gulp.src(paths.src)
    .pipe(sass(TASK_CONFIG.stylesheets.sass))
    .on('error', handleErrors)
    .pipe(autoprefixer(TASK_CONFIG.stylesheets.autoprefixer))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('stylesheets', sassTask);
module.exports = stylesheetsTask;
