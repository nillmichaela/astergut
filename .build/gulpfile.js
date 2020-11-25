const gulp = require('gulp');

gulp.task('html', require('./.gulp/tasks/html'));
gulp.task('scss', require('./.gulp/tasks/scss'));
gulp.task('data-css', require('./.gulp/tasks/data-css'));
gulp.task('js', require('./.gulp/tasks/js'));

gulp.task('clean-fonts', require('./.gulp/tasks/clean-fonts'));
gulp.task('clean-images', require('./.gulp/tasks/clean-images'));
gulp.task('clean-meta', require('./.gulp/tasks/clean-meta'));

gulp.task('copy-fonts', require('./.gulp/tasks/copy-fonts'));
gulp.task('copy-images', require('./.gulp/tasks/copy-images'));
gulp.task('copy-meta', require('./.gulp/tasks/copy-meta'));

gulp.task('fonts', gulp.series('clean-fonts', 'copy-fonts'));
gulp.task('images', gulp.series('clean-images', 'copy-images'));
gulp.task('meta', gulp.series('clean-meta', 'copy-meta'));

gulp.task('watch', require('./.gulp/tasks/watch'));
gulp.task('build', gulp.series('html', 'scss', 'data-css', 'js', 'fonts', 'images', 'meta'));
gulp.task('default', gulp.series('watch'));