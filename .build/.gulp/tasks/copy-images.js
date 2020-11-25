const gulp = require('gulp');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');

const args = require('../modules/args');
const onError = require('../modules/on-error')({title: 'Copy Images Error'});
const onSuccess = require('../modules/on-success')({title: 'Copy Images', message: 'Images copied ...'});
const renameImage = require('../modules/rename-image');

const config = require('../config');

module.exports = function () {
	const pattern = config.paths.mockups.img + '**/*.*';
	const target = args.hasOwnProperty('target') ? args.target : 'preview';
	const targetDestination = config.paths.build[target].img;
	
	return gulp.src(pattern)
		.pipe(plumber({errorHandler: onError}))
		.pipe(rename(renameImage))
		.pipe(gulp.dest(targetDestination))
		.pipe(onSuccess());
};