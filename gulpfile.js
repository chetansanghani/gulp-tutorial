/**
 * Plugins
 * -------
 */
 
var gulp = require('gulp'); // Gulp is always required
var sass = require('gulp-sass'); // Gulp libsass implementation


/**
 * Tasks
 * -----
 */

/**
 * Compiles SCSS files into CSS
 *
 * @source .scss files
 * @dest .css files
 */
 
gulp.task('sass', function(){
  return gulp.src('application/scss/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('application/css'));
});


gulp.task('sass:watch', function () {
  gulp.watch('application/scss/*.scss', ['sass']);
});