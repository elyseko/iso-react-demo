var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var reporters = require('jasmine-reporters');

gulp.task('test:server', function () {
    return gulp.src('test/*spec.js')
        .pipe(jasmine({
            reporter: new reporters.TerminalReporter()
        }));
});
