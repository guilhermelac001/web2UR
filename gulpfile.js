var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


gulp.task('build', function() {
	var bundle = browserify('index.js').bundle()
	return bundle
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./build/'))
})