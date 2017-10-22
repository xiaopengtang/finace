'use strict'

const merge = require('webpack-merge')

const CDN = require('../cdn.config')

const path = require('path')

const base = require('./base')

module.exports = merge(base, {
	'entry': path.resolve(__dirname,'../resource/client.js'),
	'output': {
		'library': '[name]',
		'libraryTarget': 'umd',
		'filename': "[name].bundle.js",
        'chunkFilename': "[name].chunk.js",
		'path': CDN.CDN_PATH,
		'publicPath': 'public/'
	},
	'module': {
		'rules': [
		    {
		    	'test': /\.js$/,
		    	"exclude" : /node_modules/,
		    	'use': {
		    		'loader': 'babel-loader',
		    		'options': {
		    			'presets': [['env', {
		    				'targets': {
		    					'browsers': ["last 2 versions", "safari >= 7"]
		    				},
		    				'useBuiltIns': true
		    			}], 'react', 'stage-1']
		    		}
		    	}
		    }
		]
	}
})