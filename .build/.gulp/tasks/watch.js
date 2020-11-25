const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const config = require('../config');

function reload(done) {
	browserSync.reload();
	done();
}

module.exports = function () {
	browserSync.init(config.browserSync);
	
	gulp.watch('**/*.nunjucks', {cwd: config.paths.mockups.html}, gulp.series('html', reload));
	gulp.watch('**/*.scss', {cwd: config.paths.mockups.scss}, gulp.series('scss', /*'data-css', */reload));
	gulp.watch('**/*.js', {cwd: config.paths.mockups.js}, gulp.series('js', reload));
	
	gulp.watch('**/*.*', {cwd: config.paths.mockups.fonts}, gulp.series('fonts', reload));
	gulp.watch('**/*.*', {cwd: config.paths.mockups.img}, gulp.series('images', reload));
	gulp.watch('**/*.*', {cwd: config.paths.mockups.meta}, gulp.series('meta', reload));
};