module.exports = function (path) {
	path.dirname = path.dirname.replace('mockups\\img', '');
	path.dirname = path.dirname.replace('preview\\img', '');
};