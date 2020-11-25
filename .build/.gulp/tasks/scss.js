const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const postCss = require('gulp-postcss')
const rename = require('gulp-rename');

const args = require('../modules/args');
const onError = require('../modules/on-error')({title: 'SCSS Error'});
const onSuccess = require('../modules/on-success')({title: 'SCSS', message: 'SCSS files processed ...'});

const config = require('../config');

module.exports = function () {
	const pattern = config.paths.mockups.scss + '*.scss';
	const target = args.hasOwnProperty('target') ? args.target : 'preview';
	const targetDestination = config.paths.build[target].css;
	
	return gulp.src(pattern)
		.pipe(plumber({errorHandler: onError}))
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(postCss(config.postCss.max))
		.pipe(gulp.dest(targetDestination))
		.pipe(postCss(config.postCss.min))
		.pipe(rename({extname: '.min.css'}))
		.pipe(gulp.dest(targetDestination))
		.pipe(onSuccess());
};