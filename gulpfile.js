var gulp = require('gulp');

var babel = require('gulp-babel');

var sass = require('gulp-sass');

//es6 task, brah
gulp.task('babel', function() {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
    //use this for client-side javascript
    // .pipe(gulp.dest('dist'));
});

//sass task
gulp.task('sass', function () {
  gulp.src('scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
  gulp.watch( 'src/**/*.js', ['babel']);
});

gulp.task('dev', ['babel', 'sass']);

