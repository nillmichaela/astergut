module.exports = function (path) {
	path.dirname = path.dirname.replace('mockups\\fonts', '');
	path.dirname = path.dirname.replace('preview\\fonts', '');
};