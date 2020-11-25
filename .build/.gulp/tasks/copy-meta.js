const gulp = require('gulp');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');

const args = require('../modules/args');
const onError = require('../modules/on-error')({title: 'Copy meta Error'});
const onSuccess = require('../modules/on-success')({title: 'Copy meta', message: 'meta copied ...'});
const renameMeta = require('../modules/rename-meta');

const config = require('../config');

module.exports = function () {
	const pattern = config.paths.mockups.meta + '**/*.*';
	const target = args.hasOwnProperty('target') ? args.target : 'preview';
	const targetDestination = config.paths.build[target].meta;
	
	return gulp.src(pattern)
		.pipe(plumber({errorHandler: onError}))
		.pipe(rename(renameMeta))
		.pipe(gulp.dest(targetDestination))
		.pipe(onSuccess());
};