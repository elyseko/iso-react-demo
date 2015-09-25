var gulp = require('gulp');
var path = require('path');
var jasmine = require('gulp-mocha');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();

gulp.task('build', function(){
  return gulp.src(['server/components/*.jsx', 'test/*spec.js'])
      .pipe(babel())
      .pipe(gulp.dest("./dist"));
});

gulp.task('test:server', function () {
    return gulp.src('dist/*spec.js')
        .pipe(jasmine({
            reporter: new reporters.TerminalReporter()
        }));
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: path.join(__dirname, "public/")
  });
});
