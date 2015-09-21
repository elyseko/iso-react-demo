var gulp = require('gulp');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://localhost:4000"
    });
});

gulp.task('build', function(){
  return gulp.src(['server/components/*.jsx', 'test/*spec.js'])
      .pipe(babel())
      .pipe(gulp.dest("./dist"));
});

gulp.task('test:server', function () {
    return gulp.src('dist/*spec.js')
        .pipe(mocha());
});
