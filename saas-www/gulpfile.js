/**
 * Created by wangdanting on 16/11/15.
 */
const gulp = require('gulp');

//load gulp plugins
const  plugins = require('gulp-load-plugins')({
    scope: ['devDependencies'],
    rename: {
        'gulp-clean-css': 'cleanCSS',
        'gulp-rev-replace': 'revReplace',
        'gulp-minify-html': 'minifyHTML',
        'gulp-rev-css-url': 'revCSSURL'
    }
});

var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');


//判断是否是生产环境执行
var gulpif = require('gulp-if');

//判断生产条件
const isProduction = process.env.NODE_ENV !== 'dev';

const del = require('del');

const CSS_FILENAME = 'app.css';
const JS_FILENAME = 'app.js';

//package 信息
const packageInfo = require('./package.json');

//目录配置
var paths = {
    src: {
        html: 'src/**/*.html',
        js: 'src/**/*.js',
        css: 'src/**/*.css',
        template: ['src/**/*.html'],
        less: 'src/**/*.less'
    },
    js: 'src/**/*.js',
    css: 'src/**/*.css',
    less: 'src/**/*.less',
    html: 'src/*.html',
    image: {
        gif: 'src/**/*.gif',
        jpg: 'src/**/*.jpg',
        png: 'src/**/*.png',
        ico: 'src/**/*.ico'
    },
    font: {
        woff: 'src/**/*.woff',
        eot: 'src/**/*.eot',
        svg: 'src/**/*.svg',
        ttf: 'src/**/*.ttf'
    },
    normalize: 'node_modules/normalize.css/normalize.css',
    modernizr: 'src/modernizr.js',
    jquery: 'node_modules/jquery/dist/jquery.min.js',
    dist: 'dist'
};

//task clean
gulp.task('clean', function(callback) {
    var distPath = paths.dist + '/**/*';
    //删除文件或文件夹
    return del(distPath, callback);
});

//task build build-assets
gulp.task('build-assets', ['clean'], function(callback) {
    var jsFilter = plugins.filter(['**/*.js', '!src/modernizr.js','!node_modules/jquery/dist/jquery.min.js'], {
        restore: true
    });
    var cssFilter = plugins.filter(['**/*.css', '!node_modules/normalize.css/normalize.css'], {
        restore: true
    });
    // var cssFilter = plugins.filter('**/*.css', {
    //     restore: true
    // });
    var lessFilter = plugins.filter('**/*.less', {
        restore: true
    });
    var imageFilter = plugins.filter(['**/*.gif', '**/*.jpg', '**/*.png', '**/*.ico'], {
        restore: true
    });

    var normalizeFilter = plugins.filter('node_modules/normalize.css/normalize.css', {
        restore: true
    });

    var modernizrFilter = plugins.filter('src/modernizr.js', {
        restore: true
    });

    var jqueryFilter = plugins.filter('node_modules/jquery/dist/jquery.min.js', {
        restore: true
    });

    // var normalizeFilter = plugins.filter('src/normalize.css', {
    //     restore: true
    // });

    var srcPaths = [
        paths.js,
        paths.less,
        paths.css,
        paths.image.gif,
        paths.image.jpg,
        paths.image.png,
        paths.image.ico,
        paths.font.eot,
        paths.font.svg,
        paths.font.ttf,
        paths.font.woff,
        paths.normalize,
        paths.modernizr,
        paths.jquery
    ];

    return gulp
        .src(srcPaths)
        .pipe(plugins.flatten())

        .pipe(lessFilter) //less
        .pipe(plugins.less())
        .pipe(lessFilter.restore)

        .pipe(cssFilter)   //css

        .pipe(sourcemaps.init())  //加前缀
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))

        .pipe(plugins.concat(CSS_FILENAME))
        .pipe(plugins.cleanCSS()) // minify css
        .pipe(cssFilter.restore)

        .pipe(normalizeFilter) //normalize
        .pipe(plugins.cleanCSS())
        .pipe(normalizeFilter.restore)

        .pipe(jsFilter)
        .pipe(plugins.concat(JS_FILENAME))

        .pipe(plugins.uglify()) // minify js
        .pipe(jsFilter.restore)

        .pipe(modernizrFilter) //modernizr
        .pipe(plugins.uglify())
        .pipe(modernizrFilter.restore)

        .pipe(imageFilter)
        // minify images
        .pipe(gulpif(isProduction, plugins.imagemin({
            progressive: true,
            interlaced: true
        })))
        .pipe(imageFilter.restore)

        .pipe(plugins.rev()) // revision
        // rename to hash
        .pipe(plugins.rename(function(path) {
            path.basename = path.basename.replace(/[\w\.]+-/g, '');
            return path;
        }))
        .pipe(plugins.revCSSURL())

        .pipe(gulp.dest(paths.dist))
        .pipe(plugins.rev.manifest()) // revision manifest
        .pipe(gulp.dest('./'));
});

//task build
gulp.task('build', ['build-assets'], function(callback) {
    var manifestFile = gulp.src('./rev-manifest.json');

    return gulp
        .src(paths.src.html)
        .pipe(plugins.revReplace({
            manifest: manifestFile,
            // prefix: packageInfo.cdn[argv.env] + packageInfo.name + '/'
            prefix: 'dist/'
        }))
        // minify html
        .pipe(plugins.minifyHTML({
            empty: true,
            quotes: true,
            spare: true,
            conditionals: true
        }))

        .pipe(plugins.flatten())
        .pipe(gulp.dest('./'));
});

//task watch
gulp.task('watch', function(callback) {
    gulp.watch(paths.src.js, ['build']);
    gulp.watch(paths.src.css, ['build']);
    gulp.watch(paths.src.less, ['build']);
    gulp.watch(paths.src.template, ['build']);
});

//task dev
gulp.task('default', ['build','watch']);

// task release
gulp.task('release', ['build']);



