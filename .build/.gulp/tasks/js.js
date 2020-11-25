const gulp = require('gulp');
const plumber = require('gulp-plumber');
const include = require('gulp-include');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const args = require('../modules/args');
const onError = require('../modules/on-error')({title: 'JS Error'});
const onSuccess = require('../modules/on-success')({title: 'JS', message: 'JS files processed ...'});

const config = require('../config');

module.exports = function () {
	const pattern = config.paths.mockups.js + '*.js';
	const target = args.hasOwnProperty('target') ? args.target : 'preview';
	const targetDestination = config.paths.build[target].js;
	
	return gulp.src(pattern)
		.pipe(plumber({errorHandler: onError}))
		.pipe(include())
		.pipe(babel(config.babel))
		.pipe(gulp.dest(targetDestination))
		.pipe(uglify())
		.pipe(rename({extname: '.min.js'}))
		.pipe(gulp.dest(targetDestination))
		.pipe(onSuccess());
};