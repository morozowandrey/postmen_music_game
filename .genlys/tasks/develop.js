var gulp = require('gulp'),
    config = require('../config'),

    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    babel = require("gulp-babel"),

    browserSync = require("browser-sync"),
    reload = browserSync.reload;


gulp.task('dev', [
    'view',
    'script',
    'style',
    'font',
    'image',
    'sound'
]);

gulp.task('view', function () {
    gulp.src(config.path.app.html)
        .pipe(gulp.dest(config.path.dev.html))
        .pipe(reload({stream: true}));
});

gulp.task('script', function () {
    gulp.src(config.path.app.scripts)
        // TODO: minimize js
        .pipe(gulp.dest(config.path.dev.js))
        .pipe(reload({stream: true}));
});

gulp.task('style', function () {
    gulp.src(config.path.app.stylus)
        .pipe(stylus())
        .pipe(concat('style.css'))
        .pipe(prefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest(config.path.dev.css))
        .pipe(reload({stream: true}))
});

gulp.task('image', function () {
    gulp.src(config.path.app.images)
        .pipe(gulp.dest(config.path.dev.images))
});

gulp.task('font', function () {
    gulp.src(config.path.app.fonts)
        .pipe(gulp.dest(config.path.dev.fonts))
});

gulp.task('sound', function () {
    gulp.src(config.path.app.sound)
        .pipe(gulp.dest(config.path.dev.sound))
});

