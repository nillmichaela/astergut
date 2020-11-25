const gulp = require('gulp');
const plumber = require('gulp-plumber');
const clean = require('gulp-clean');

const args = require('../modules/args');
const onError = require('../modules/on-error')({title: 'Clean Images Error'});
const onSuccess = require('../modules/on-success')({title: 'Clean Images', message: 'Images cleaned ...'});

const config = require('../config');

module.exports = function () {
	const target = args.hasOwnProperty('target') ? args.target : 'preview';
	const pattern = config.paths.build[target].img + '**/*.*';
	
	return gulp.src(pattern)
		.pipe(plumber({errorHandler: onError}))
		.pipe(clean(config.clean.images))
		.pipe(onSuccess());
};