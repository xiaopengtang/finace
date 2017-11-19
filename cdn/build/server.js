const merge = require('webpack-merge')

const base = require('./base')

module.exports = merge(base, {
	'entry': '../resource/module/server.js',
	'output': {
		'library': '[name]',
		'libraryTarget': 'umd',
		'filename': '[name].js',
		'path': CDN.COMPONENT_PATH
	},
	'module': {
		'rules': [
		    {
		    	'test': /\.js$/,
		    	"exclude" : /node_modules/,
		    	'use': {
		    		'loader': 'babel',
		    		'options': {
		    			'presets': [['env', {
		    				'targets': {
		    					'node': '6.10.0'
		    				}
		    			}], 'react','stage-1']
		    		}
		    	}
		    }
		]
	}
})