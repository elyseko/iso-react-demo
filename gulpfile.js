var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var reporters = require('jasmine-reporters');
var babel = require('gulp-babel');

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
