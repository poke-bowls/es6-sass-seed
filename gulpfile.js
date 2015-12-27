var gulp = require('gulp');

var babel = require('gulp-babel');

gulp.task('default', function() {
  return gulp.src('src/test.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});
//es6 task, brah




//sass task
