module.exports = function (path) {
	path.dirname = path.dirname.replace('mockups\\meta', '');
	path.dirname = path.dirname.replace('preview\\meta', '');
};