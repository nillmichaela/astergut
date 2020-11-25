const notify = require('gulp-notify');

module.exports = function (settings) {
	return function () {
		return notify({
			title: settings.title,
			message: settings.message,
			onLast: true,
			sound: false
		});
	}
};