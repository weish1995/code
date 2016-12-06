'use strict';
import gulp from 'gulp';
import less from 'gulp-less';
import webpack from 'webpack';
import autoprefixer from 'gulp-autoprefixer';
import path from 'path';
import del from 'del';
import util from 'gulp-util';

const webpackConfig = require('./webpack.config');

// load gulp plugins
const plugins = require('gulp-load-plugins')({
    scope: ['devDependencies'],
    rename: {
        'gulp-clean-css': 'cleanCSS',
        'gulp-notify': 'gulpNotify',
    },
});

const dirs = {
    src: 'src',
    dest: 'build',
};

gulp.task('styles', () => {
    return gulp.src(paths.src)
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.dest));
});

const paths = {
    dist: 'dist',
    output: 'output/**/*',
    src: {
        js: 'src/**/*.js',
        css: 'src/**/*.css',
        html: 'src/**/*.html',
        less: 'src/**/*.less',
    },
    js: 'output/**/*.js',
    css: 'output/**/*.css',
    image: {
        gif: 'output/**/*.gif',
        jpg: 'output/**/*.jpg',
        png: 'output/**/*.png',
    },
    font: {
        woff: 'output/**/*.woff',
        eot: 'output/**/*.eot',
        svg: 'output/**/*.svg',
        ttf: 'output/**/*.ttf',
    }
}

// task build dev
gulp.task('build-dev', ['webpack'], (callback) => {




    // var cssFilter = plugins.filter('**/*.css', {restore: true})
    // //var jsLibFilter = plugins.filter(['**/zepto.js', '**/sui.js', '**/vue-lib.js'], {restore: true})
    //
    // var srcPaths = [
    //     paths.js,
    //     paths.css,
    //     paths.image.gif,
    //     paths.image.jpg,
    //     paths.image.png,
    //     paths.font.woff,
    //     paths.font.eot,
    //     paths.font.svg,
    //     paths.font.ttf
    // ]
    //
    // return gulp
    //     .src(srcPaths)
    //     .pipe(cssFilter)
    //     .pipe(plugins.concat(CSS_FILENAME))
    //     .pipe(cssFilter.restore)
    //     //.pipe(jsLibFilter)
    //     //.pipe(plugins.order([
    //     //    '**/vue-lib.js',
    //     //    '**/zepto.js',
    //     //    '**/sui.js'
    //     //]))
    //     //.pipe(plugins.concat(JS_LIB_FILENAME))
    //     //.pipe(jsLibFilter.restore)
    //     .pipe(gulp.dest(paths.dist))
    //     .pipe(gulp.dest(ASSETS_DIR))
})

// task watch
gulp.task('watch', (callback) => {
    gulp.watch(paths.src.js, ['build-dev'])
    gulp.watch(paths.src.css, ['build-dev'])
    gulp.watch(paths.src.html, ['build-dev'])
    gulp.watch(paths.src.less, ['build-dev'])
});

// task default
gulp.task('default', ['build-dev', 'watch'])






gulp.task('clean-output', (callback) => {
    return del(paths.output, callback)
})

gulp.task('clean', ['clean-output'], (callback) => {
    let distGlob = paths.dist + '**/*'

    return del(distGlob, callback);
})

// gulp.task('webpack', ['clean'], function(callback) {
gulp.task('webpack', (callback) => {
    webpack(webpackConfig, (err, stats) => {
        if (err) {
            throw new util.PluginError('webpack', err);
        }
        plugins.util.log('[webpack]', stats.toString())
        console.log('success', new Date());
        callback();
    });
});
