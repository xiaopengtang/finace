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
		'filename': '[name].js',
		'path': CDN.CDN_PATH
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
		    				}
		    			}]]
		    		}
		    	}
		    }
		]
	}
})