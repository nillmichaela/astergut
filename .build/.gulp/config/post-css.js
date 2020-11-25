const path = require('path');
const inlineSvg = require('postcss-inline-svg');
const dataPacker = require('postcss-data-packer');
const mqPacker = require('css-mqpacker');
const cssNano = require('cssnano');

const args = require('../modules/args');
const paths = require('./paths');
const target = args.hasOwnProperty('target') ? args.target : 'preview';

module.exports = {
	max: [
		inlineSvg({paths: [paths.mockups.icons]}),
		dataPacker({
			pure: false,
			dest: {
				path: function (options) {
					return paths.build[target].css + path.basename(options.from, '.css') + '.data.css';
				}
			}
		}),
		mqPacker({sort: true})
	],
	min: [
		cssNano({
			zindex: false,
			discardComments: {
				removeAll: true
			},
			discardDuplicates: {
				removeAll: true
			},
			autoprefixer: {
				add: true,
				browsers: [
					'last 5 version',
					'> 1%',
					'Firefox ESR',
					'Explorer 8',
					'Android 4',
					'Safari 7'
				]
			}
		}),
		mqPacker({sort: true})
	],
	data: [
		cssNano()
	]
};