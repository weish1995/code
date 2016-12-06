/**
 * Created by Administrator on 2016-11-29.
 */
var gulp = require('gulp'),
    del = require('del'),
    autoprefixer = require('autoprefixer'),
    isProducation = process.argv[2] !== 'dev'; // development or not

const CSS_NAME = 'app.css',
        JS_NAME = 'app.js';

var plugins = require('gulp-load-plugins')({
    scope: ['devDependencies'],
    rename: {
        'gulp-clean-css': 'cleanCSS',
        'gulp-rev-css-url': 'revCSSURL',
        'gulp-rev-replace': 'revReplace',
        'gulp-minify-html': 'minifyHTML'
        // 'gulp-px2rem-plugin': 'pxtorem'
    }
});

// paths (src, dist)
var paths = {
    html: 'src/**/*.html',
    js: 'src/**/*.js',
    css: 'src/**/*.css',
    less: 'src/**/*.less',
    image: {
        png: 'src/**/*.png',
        jpg: 'src/**/*.jpg',
        gif: 'src/**/*.gif',
        ico: 'src/**/*.ico'
    },
    font: {
        svg: 'src/**/*.svg',
        woff: 'src/**/*.woff',
        eot: 'src/**/*.eot',
        ttf: 'src/**/*.ttf'
    },
    dist: 'dist'
};

var srcPaths = [
    paths.js,
    paths.css,
    paths.less,
    paths.image.gif,
    paths.image.png,
    paths.image.ico,
    paths.image.jpg,
    paths.font.woff,
    paths.font.ttf,
    paths.font.eot,
    paths.font.svg
];

// task clean
gulp.task('clean', function(callback) {
    var delPath = paths.dist + '/**/*';

    return del(delPath, callback);
});

// task build-dev
gulp.task('build-dev', ['clean'], function(callback) {
    // js files
    var jsFiles = plugins.filter(['**/*.js'], {
        restore: true
    });

    // css files
    var cssFiles = plugins.filter(['**/*.css'], {
        restore: true
    });

    // less files
    var lessFiles = plugins.filter(['**/*.less'], {
        restore: true
    });

    // image files
    var imageFiles = plugins.filter(['**/*.png', '**/*.jpg', '**/*.gif', '**/*.ico'], {
        restore: true
    });

    return gulp
        .src(srcPaths)

        // remove relative path
        .pipe(plugins.flatten())
        .pipe(plugins.plumber({
            errorHandler: plugins.notify.onError('Error: <%= error.message %>')
        }))

        // less
        .pipe(lessFiles)
        .pipe(plugins.less())
        .pipe(lessFiles.restore)

        // css
        .pipe(cssFiles)
        .pipe(plugins.concat(CSS_NAME))

        // px -> rem
        .pipe(plugins.px2rem())
        .pipe(plugins.postcss([
            autoprefixer( {'browsers': ['last 2 version'] })
        ]))
        .pipe(plugins.cleanCSS())
        .pipe(cssFiles.restore)

        // js
        .pipe(jsFiles)

        // es6 -> es5
        .pipe(plugins.babel({
            presets: ['es2015']
        }))
        .pipe(plugins.concat(JS_NAME))
        .pipe(plugins.if(isProducation, plugins.uglify()))
        .pipe(jsFiles.restore)

        // image
        .pipe(imageFiles)
        .pipe(plugins.if(isProducation, plugins.imagemin({
            progressive: true,
            interlaced: true
        })))
        .pipe(imageFiles.restore)

        // rename hash
        .pipe(plugins.rev())
        .pipe(plugins.rename(function(path) {
            path.basename = path.basename.replace(/[\w\.]+-/g, '');

            return path;
        }))

        .pipe(plugins.revCSSURL())
        .pipe(gulp.dest(paths.dist))

        // manifest file
        .pipe(plugins.rev.manifest())
        .pipe(gulp.dest('./'))
});

// task build
gulp.task('build', ['build-dev'], function(callback) {
    var manifestFile = gulp.src('./rev-manifest.json');

    return gulp
        .src(paths.html)
        .pipe(plugins.flatten())
        .pipe(plugins.revReplace({
            manifest: manifestFile,

            // prefix
            prefix: './dist/'
        }))
        .pipe(plugins.minifyHTML())
        .pipe(gulp.dest('./'))
});

// task watch
gulp.task('watch', function() {
    gulp.watch(srcPaths, ['build']);
});

// task dev
gulp.task('dev', ['build', 'watch']);

// task release
gulp.task('release', ['build']);
