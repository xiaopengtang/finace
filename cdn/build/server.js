const merge = require('webpack-merge')

const base = require('./base')

module.exports = merge(base, {
	'entry': '../resource/module/server.js',
	'output': {
		'library': '[name]',
		'libraryTarget': 'umd',
		'filename': '[name].js'
	},
	'module': {
		'rules': [
		    {
		    	'test': /\.js$/,
		    	"exclude" : /node_modules/,
		    	'use': {
		    		'loader': 'babel',
		    		'options': {
		    			'presets': ['env', {
		    				'targets': {
		    					'node': 'current'
		    				}
		    			}]
		    		}
		    	}
		    }
		]
	}
})