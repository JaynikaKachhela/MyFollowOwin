/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('default', function () {
    // place code for your default task here
});

/// <binding BeforeBuild='default' Clean='clean' />

"use strict";

var _ = require('lodash'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    del = require('del');

var paths = {
    npm: './node_modules/',
    libs: './wwwroot/libs/',
    angular2: './wwwroot/libs/angular2/',
    styles: './wwwroot/styles',
    fonts: './wwwroot/fonts'
};

var angularJs = [
    paths.npm + 'angular2/bundles/angular2.dev.js',
    paths.npm + 'angular2/bundles/router.dev.js',
    paths.npm + 'angular2/bundles/angular2-polyfills.js',
    paths.npm + 'angular2/bundles/http.dev.js',
    paths.npm + 'angular2/es6/dev/src/testing/shims_for_IE.js'
];

var js = [
    paths.npm + 'bootstrap/dist/js/bootstrap.js',
    paths.npm + 'systemjs/dist/system-polyfills.js',
    paths.npm + 'es6-shim/es6-shim.min.js',
    paths.npm + 'systemjs/dist/system.src.js',
    paths.npm + 'rxjs/bundles/Rx.js',
    paths.npm + 'typescript/lib/typescript.js',
    paths.npm + 'jquery/dist/jquery.js'
];

var styles = [
    paths.npm + 'bootstrap/dist/css/bootstrap.css',
    paths.npm + 'ng2-material/dist/ng2-material.css'
];

var fonts = [
    paths.npm + 'bootstrap/dist/fonts/*.*',
    paths.npm + 'ng2-material/dist/font.css'
];

gulp.task('copy-js', function () {
    _.forEach(js, function (file, _) {
        gulp.src(file)
            .pipe(gulp.dest(paths.libs))
    });
    _.forEach(angularJs, function (file, _) {
        gulp.src(file)
            .pipe(gulp.dest(paths.angular2))
    });
});

gulp.task('copy-min-js', function () {
    _.forEach(js, function (file, _) {
        gulp.src(file)
            .pipe(uglify())
            .pipe(rename({ extname: '.min.js' }))
            .pipe(gulp.dest(paths.libs))
    });
    _.forEach(angularJs, function (file, _) {
        gulp.src(file)
            .pipe(uglify())
            .pipe(rename({ extname: '.min.js' }))
            .pipe(gulp.dest(paths.angular2))
    });
});

gulp.task('copy-css', function () {
    _.forEach(styles, function (file, _) {
        gulp.src(file)
            .pipe(gulp.dest(paths.styles))
    });
    _.forEach(fonts, function (file, _) {
        gulp.src(file)
            .pipe(gulp.dest(paths.fonts))
    });
});

gulp.task('copy-min-css', function () {
    _.forEach(styles, function (file, _) {
        gulp.src(file)
            .pipe(cssmin())
            .pipe(rename({ extname: '.min.css' }))
            .pipe(gulp.dest(paths.styles))
    });
    _.forEach(fonts, function (file, _) {
        gulp.src(file)
            .pipe(gulp.dest(paths.fonts))
    });
});

gulp.task('clean', function (callback) {
    //del is an async function and not a gulp plugin (just standard nodejs)
    //It returns a promise, so make sure you return that from this task function
    //  so gulp knows when the delete is complete
    return del([paths.libs, paths.styles, paths.fonts]);
});

gulp.task('default', ['copy-js', 'copy-css']);
gulp.task('minify', ['copy-min-js', 'copy-min-css']);
