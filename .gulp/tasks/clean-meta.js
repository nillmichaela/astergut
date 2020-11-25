const gulp = require('gulp');
const plumber = require('gulp-plumber');
const clean = require('gulp-clean');

const args = require('../modules/args');
const onError = require('../modules/on-error')({title: 'Clean Meta Error'});
const onSuccess = require('../modules/on-success')({title: 'Clean Meta', message: 'Meta cleaned ...'});

const config = require('../config');

module.exports = function () {
	const target = args.hasOwnProperty('target') ? args.target : 'preview';
	const pattern = config.paths.build[target].meta + '**/*.*';
	
	return gulp.src(pattern)
		.pipe(plumber({errorHandler: onError}))
		.pipe(clean(config.clean.meta))
		.pipe(onSuccess());
};