const path = require('path');

const cwd = process.cwd();
const mockups = path.join(cwd, 'mockups/');
const preview = path.join(cwd, 'preview/');
const wordpress = path.join(cwd, '../wordpress/wp-content/themes/nill/assets/');

module.exports = {
	mockups: {
		fonts: path.join(mockups, 'fonts/'),
		html: path.join(mockups, 'html/'),
		img: path.join(mockups, 'img/'),
		icons: path.join(mockups, 'img/icons/'),
		js: path.join(mockups, 'js/'),
		scss: path.join(mockups, 'scss/'),
		meta: path.join(mockups, 'meta/')
	},
	build: {
		preview: {
			fonts: path.join(preview, 'fonts/'),
			html: path.join(preview),
			img: path.join(preview, 'img/'),
			icons: path.join(preview, 'img/icons/'),
			js: path.join(preview, 'js/'),
			css: path.join(preview, 'css/'),
			meta: path.join(preview, 'meta/')
		},
		wordpress: {
			fonts: path.join(wordpress, 'fonts/'),
			html: path.join(wordpress, 'html/'),
			img: path.join(wordpress, 'img/'),
			icons: path.join(wordpress, 'img/icons/'),
			js: path.join(wordpress, 'js/'),
			css: path.join(wordpress, 'css/'),
			meta: path.join(wordpress, 'meta/')
		}
	}
};