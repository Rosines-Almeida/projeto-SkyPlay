var gulp = require('gulp');
var minifycss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
 

gulp.task('minify-css', function() {
    return gulp.src('./css/main.css')
      .pipe(minifycss({
        compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./build/css'));
  });
  
  
  gulp.task('minify-html', function() {
    return gulp.src('./index.html')
      .pipe(htmlclean())
      .pipe(htmlmin({
        removeComments: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }))
      .pipe(gulp.dest('./build/js'))
  });

 
  gulp.task('minify-js', function() {
    return gulp.src('./js/app.js')
      .pipe(uglify())
      .pipe(gulp.dest('./build'));
  });
