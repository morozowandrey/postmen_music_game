var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,

    config = require('../config');


gulp.task('start', ['dev', 'webserver', 'watch']);

gulp.task('webserver', function () {
    browserSync(config.serverConfig);
});


gulp.task('watch', function () {
    watch([config.path.watch.html], function (event, cb) {
        gulp.start(['view']);
    });
    watch([config.path.watch.stylus], function (event, cb) {
        gulp.start(['style']);
    });
    watch([config.path.watch.scripts], function (event, cb) {
        gulp.start(['script']);
    });
    watch([config.path.watch.images], function (event, cb) {
        gulp.start(['image']);
    });
    watch([config.path.watch.fonts], function (event, cb) {
        gulp.start(['font']);
    });
    watch([config.path.watch.sound], function (event, cb) {
        gulp.start(['sound']);
    });
});