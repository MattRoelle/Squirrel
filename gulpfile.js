var gulp       = require('gulp');
var sass       = require('gulp-sass');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var del        = require('del');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS  = require('gulp-minify-css');

gulp.task('build-js', function() {
  return gulp.src('src/js/*.js')
             .pipe(sourcemaps.init())
             .pipe(uglify())
             .pipe(concat('build.min.js'))
             .pipe(sourcemaps.write())
             .pipe(gulp.dest('build/js'));
});

gulp.task('build-css', function() {
  return gulp.src('src/css/*.sass')
             .pipe(sourcemaps.init())
             .pipe(sass())
             .pipe(concat('build.min.css'))
             .pipe(minifyCSS())
             .pipe(sourcemaps.write())
             .pipe(gulp.dest('build/css'));
});

gulp.task('build', ['build-js', 'build-css']);

gulp.task('default', ['build']);
