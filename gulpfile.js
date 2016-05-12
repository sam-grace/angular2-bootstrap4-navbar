const gulp = require('gulp');
const del = require('del');


const dirs = {
  src: 'src',
  dest: 'dist'
};


// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del([dirs.dest]);
});


gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest(dirs.dest));
});


gulp.task('css', function () {
  return gulp.src('src/**/*.css')
    .pipe(gulp.dest(dirs.dest));
});


gulp.task('default', ['css', 'html']);


