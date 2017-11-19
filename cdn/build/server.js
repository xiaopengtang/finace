const merge = require('webpack-merge')

const base = require('./base')

const CDN = require('../cdn.config')

const path = require('path')

module.exports = merge(base, {
	'entry': path.resolve(__dirname,'../resource/server.js'),
	'output': {
		'library': '[name]',
		'libraryTarget': 'umd',
		'filename': '[name].js',
		'publicPath': '',
		'path': CDN.COMPONENT_PATH
	},
	'node': {
        'console': true,
        'global': true,
        'process': true,
        'Buffer': true,
        '__filename': true,
        '__dirname': true,
        'setImmediate': true
    },
	'target': 'node',
	'plugins': [],
	'module': {
		'rules': [
		    {
		    	'test': /\.js$/,
		    	"exclude" : /node_modules/,
		    	'use': {
		    		'loader': 'babel-loader',
		    		'options': {
		    			'plugins': ['transform-decorators-legacy'],
		    			'presets': [['env', {
		    				'targets': {
		    					'node': '6.10'
		    				}
		    			}], 'react','stage-1']
		    		}
		    	}
		    }
		]
	},
	'externals': 'mobx-react mobx react react-router-dom react-dom react-dom/server prop-types antd-mobile react-addons-css-transition-group'.split(' ')
})