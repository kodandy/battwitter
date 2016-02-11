var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('server', function () {
  browserSync({
    notify: false,
    server: {
      baseDir: "html"
    }
  });

gulp.watch('./assets/src/**/*', reload);
});
