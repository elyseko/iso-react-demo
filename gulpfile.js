var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
  browserSync.init({
    server: path.join(__dirname, "public/")
  });
});
