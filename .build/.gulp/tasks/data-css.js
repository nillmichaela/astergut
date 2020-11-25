const gulp = require('gulp');
const plumber = require('gulp-plumber');
const postCss = require('gulp-postcss');
const rename = require('gulp-rename');

const args = require('../modules/args');
const onError = require('../modules/on-error')({title: 'Data CSS Error'});
const onSuccess = require('../modules/on-success')({title: 'Data CSS', message: 'Data CSS files processed ...'});

const config = require('../config');

module.exports = function () {
	const target = args.hasOwnProperty('target') ? args.target : 'preview';
	const pattern = config.paths.build[target].css + '*.data.css';
	const targetDestination = config.paths.build[target].css;
	
	return gulp.src(pattern)
		.pipe(plumber({errorHandler: onError}))
		.pipe(postCss(config.postCss.data))
		.pipe(rename({extname: '.min.css'}))
		.pipe(gulp.dest(targetDestination))
		.pipe(onSuccess());
};