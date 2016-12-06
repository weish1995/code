var gulp = require('gulp'),
	less = require('gulp-less'),
	browserSync = require('browser-sync'), /* 浏览器自动刷新 */
	useref = require('gulp-useref'), /* 合并*/
	uglify = require('gulp-uglify'), /* 压缩 */
	combiner = require('stream-combiner2'), /* 时间监听器 */
	minifyCSS = require('gulp-minify-css'), /* 压缩css */
	imagemin = require('gulp-imagemin'), /* 图片压缩 */
	ss;

/* 压缩js */
gulp.task('script', function() {
	gulp.src('app/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.reload({
			stream: true
		}));
})

/* 将less转换成css并压缩 */
gulp.task('less', function() {
	gulp.src('app/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('app/css')) /* 输出未压缩css */
		.pipe(minifyCSS())		
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
})

/* 图片压缩 */
gulp.task('image', function() {
	gulp.src('app/images/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));
})

/* 自动刷新浏览器页面 */
gulp.task('browser', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
	});
})

/* 监听事件 */
gulp.task('auto', ['script', 'less', 'image', 'browser'], function() {
	gulp.watch('app/js/*.js', ['script']);
	gulp.watch('app/less/*.less', ['less']);
	gulp.watch('app/images/*.*', ['image']);
})

