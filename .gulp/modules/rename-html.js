module.exports = function (path) {
	path.dirname = path.dirname.replace('mockups\\html', '');
	path.dirname = path.dirname.replace('preview\\html', '');
	path.extname = '.html';
};