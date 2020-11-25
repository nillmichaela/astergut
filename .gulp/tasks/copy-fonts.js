const gulp = require('gulp');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');

const args = require('../modules/args');
const onError = require('../modules/on-error')({title: 'Copy Fonts Error'});
const onSuccess = require('../modules/on-success')({title: 'Copy Fonts', message: 'Fonts copied ...'});
const renameFont = require('../modules/rename-font');

const config = require('../config');

module.exports = function () {
	const pattern = config.paths.mockups.fonts + '**/*.*';
	const target = args.hasOwnProperty('target') ? args.target : 'preview';
	const targetDestination = config.paths.build[target].fonts;
	
	return gulp.src(pattern)
		.pipe(plumber({errorHandler: onError}))
		.pipe(rename(renameFont))
		.pipe(gulp.dest(targetDestination))
		.pipe(onSuccess());
};