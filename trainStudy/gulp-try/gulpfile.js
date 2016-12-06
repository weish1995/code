/**
 * Created by Administrator on 2016-11-22.
 */
var gulp = require('gulp');

var plugins = require('gulp-load-plugins')({
    scope: ['devDependencies'],
    rename: {
        'gulp-clean-css': 'cleanCSS',   //压缩css
        'gulp-rev-replace': 'revReplace', //重命名
        'gulp-minify-html': 'minifyHTML', //压缩html
        'gulp-rev-css-url': 'revCSSURL' //重写css里面的图片链接
    }
});

// var autoprefixer = require('autoprefixer'); //添加浏览器前缀
var minimist = require('minimist');
//
// const del = require('del'); //删除文件
//
// // 判断生产条件

var isProducation = process.argv[2] !== 'dev';

//const isProducation = process.env.NODE_ENV !== 'dev';

//
// const CSS_FILENAME = 'app.css';
// const JS_FILENAME = 'app.js';

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
    html: 'src/**/*.html',
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
    dist: 'dist'
};

/*
 * task clean 删除dist里面的所有文件，重新生成
 * task function return -- 加上（同步）、不加上（异步）
 */
gulp.task('clean', function(callback) {
    var distPath = paths.dist + '/**/*';

    return del(distPath, callback);
});

gulp.task('build-assets', function(callback) {
    var jsFilter = plugins.filter(['**/*.js'], {
        restore: true
    });

    var lessFilter = plugins.filter(['**/*.less'], {
        restore: true
    });

    var cssFilter = plugins.filter(['**/*.css'], {
        restore: true
    });

    var imageFilter = plugins.filter(['**/*.png', '**/*.jpg', '**/*.gif'], {
        restore: true
    });

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
        paths.font.woff
    ];

    return gulp
        .src(srcPaths)
        .pipe(plugins.flatten()) // 去掉相对路径
        // .pipe(plugins.plumber({
        //     errorHandler: plugins.notify.onError('Error: <%= error.message %>')
        // })) // 错误处理
        //
        // .pipe(lessFilter) // 取出less文件
        // .pipe(plugins.less()) // less -> css
        // .pipe(lessFilter.restore) // 恢复
        //
        // .pipe(cssFilter) //取出css文件
        // .pipe(plugins.postcss( [ autoprefixer({ browsers: ['last 2 version'] }) ] )) //加前缀
        //
        // .pipe(plugins.concat(CSS_FILENAME)) // 全部添加到css_filename文件里面
        // .pipe(plugins.cleanCSS()) //压缩css
        // .pipe(cssFilter.restore)
        //
        // .pipe(jsFilter)
        // .pipe(plugins.concat(JS_FILENAME))
        // // .pipe(plugins.uglify()) // 压缩js
        // .pipe(plugins.if(isProducation, plugins.uglify()))
        // .pipe(jsFilter.restore)

        .pipe(imageFilter) // 取出图片

        .pipe(plugins.imagemin({
            optimizationLevel: 7, // 优化等级（0-7） 默认值为3
            propressive : true, // 无损压缩jpg图片 默认：false
            interlaced: true, // 隔行扫描gif进行渲染 默认：false
            multipass: true // 多次优化svg直到完全优化 默认：false
        }))

        // .pipe(plugins.rev()) // 命名改成随机
        //
        // // 删除原名
        // .pipe(plugins.rename(function(path) {
        //     path.basename = path.basename.replace( /[\w\.]+-/g, '');
        //     return path;
        // }))
        //
        // .pipe(plugins.revCSSURL()) // 替换css里面的路径名

        .pipe(gulp.dest('dist/'));

        // .pipe(plugins.rev.manifest()) // 生成依赖文件
        // .pipe(plugins.plumber.stop())
        // .pipe(gulp.dest('./'))
});

 gulp.task('build', ['build-assets'], function(callback) {
    // var mainfestFile = gulp.src('./rev-manifest.json');
    //
    //  // 按照mainfest文件对应关系更改html文件中的内容
    // return gulp
    //     .src(paths.html)
    //     .pipe(plugins.plumber())
    //     .pipe(plugins.flatten())
    //
    //     .pipe(plugins.revReplace({
    //         manifest: mainfestFile,
    //
    //         // 添加前缀
    //         prefix: 'dist/'
    //     }))
    //
    //     .pipe(plugins.minifyHTML({
    //         empty: true, // 不删除空白属性
    //         cdata: false, // 不删除cdata
    //         comments: false, // 不删除注释
    //         ssi: false, // ？
    //         conditionals: true, //不删除条件注释 <IE>
    //         spare: true, // 不删除冗余属性
    //         quotes: true, // 不删除任意引号
    //         loose: false // 保留一个空格
    //     }))
    //
    //     .pipe(plugins.plumber.stop())
    //     .pipe(gulp.dest('./'));
});

/*
 * 循环监听
 */
gulp.task('watch', function() {
    // gulp.watch(paths.src.js, ['build']);
    // gulp.watch(paths.src.html, ['build']);
    // gulp.watch(paths.src.css, ['build']);
    // gulp.watch(paths.src.less, ['build']);
});

/*
 * 开发环境
 */
gulp.task('dev', ['build', 'watch']);

/*
 * 部署环境
 */
gulp.task('release', ['build']);
