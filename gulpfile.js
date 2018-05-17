var gulp = require('gulp');
var ts = require('gulp-typescript');
var exec = require('child_process').exec;
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var tsify = require("tsify");

/**
 * Build a distributable package from the angular app
 */
gulp.task('ng-build', function (cb) {
    console.log('running ng build...');
    exec('ng build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
        return true;
    });
});

/**
 * Package content scripts for the chrome extension in the angular app distributable
 */
gulp.task('content-script', function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: 'content-script/boot.ts'
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('content-script.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'));
});

/**
 * Default gulp task to execute ng-build and content-script gulp tasks serially
 */
gulp.task('default', gulp.series('ng-build', 'content-script'));