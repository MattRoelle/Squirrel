var gulp       = require('gulp');
var sass       = require('gulp-sass');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS  = require('gulp-minify-css');
var watch      = require('gulp-watch');
var connect    = require('gulp-connect');

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

gulp.task('server', function() {
  connect.server({
    root: './',
    livereload: {
      enable: true,
      port: 45000
    }
  });
});

gulp.task('reload', function() {
  return gulp.src('src/**/*')
             .pipe(connect.reload());
});


gulp.task('watch', function() {
  return gulp.watch('src/**/*', ['build', 'reload']);
});


gulp.task('default', ['watch', 'server']);
