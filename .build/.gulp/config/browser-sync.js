const paths = require('./paths');

module.exports = {
	open: false,
	server: {
		baseDir: paths.build.preview.html,
		middleware: function (req, res, next) {
			if (req.method.toUpperCase() === 'POST') {
				console.log('[POST => GET]: ' + req.url);
				req.method = 'GET';
			}
			next();
		}
	}
};