const notify = require('gulp-notify');

module.exports = function (settings) {
	return function (error) {
		notify.onError({
			title: settings.title,
			message: settings.message || '<%= error.message %>',
			sound: true
		});
		
		this.emit('end');
	}
};