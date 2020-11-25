const gulp = require('gulp');
const plumber = require('gulp-plumber');
const nunjucks = require('nunjucks');
const gulpNunjucks = require('gulp-nunjucks');
const rename = require('gulp-rename');

const args = require('../modules/args');
const onError = require('../modules/on-error')({title: 'HTML Error'});
const onSuccess = require('../modules/on-success')({title: 'HTML', message: 'HTML files processed ...'});
const renameHtml = require('../modules/rename-html');

const config = require('../config');

module.exports = function () {
	const pattern = [
		config.paths.mockups.html + '**/*.nunjucks',
		'!' + config.paths.mockups.html + 'elements/**',
		'!' + config.paths.mockups.html + 'layouts/**',
		'!' + config.paths.mockups.html + 'macros/**',
		'!' + config.paths.mockups.html + 'partials/**'
	];
	const target = args.hasOwnProperty('target') ? args.target : 'preview';
	const targetDestination = config.paths.build[target].html;
	const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(config.paths.mockups.html));
	
	return gulp.src(pattern)
		.pipe(plumber({errorHandler: onError}))
		.pipe(gulpNunjucks.compile({}, {env: env})).on('error', function (err) { throw err; })
		.pipe(rename(renameHtml))
		.pipe(gulp.dest(targetDestination))
		.pipe(onSuccess());
};