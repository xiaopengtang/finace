'use strict'

const merge = require('webpack-merge')

const CDN = require('../cdn.config')

const path = require('path')

const webpack = require('webpack')

const base = require('./base')

const addVersionForStaticSource = require('./plugins/addVersionForStaticSource')

module.exports = merge(base, {
	'entry': {
		'main': path.resolve(__dirname,'../resource/client.js'),
		'common': ['react', 'react-dom', 'react-router', 'mobx', 'axios', 'antd-mobile']
	},
	'output': {
		'library': '[name]',
		'libraryTarget': 'umd',
		'filename': "[name].bundle.js",
        'chunkFilename': "[name].chunk.js",
		'path': CDN.CDN_PATH,
		'publicPath': 'public/'
	},
	'plugins': [
		new webpack.DefinePlugin({
	        'process.env': { 
	            NODE_ENV: JSON.stringify("production") 
	        }
	    }),
	    new webpack.optimize.CommonsChunkPlugin('common'),
	    new addVersionForStaticSource
	],
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
		    					'browsers': ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] //["last 2 versions", "safari >= 7"]
		    				},
		    				'useBuiltIns': true
		    			}], 'react', 'stage-1']
		    		}
		    	}
		    }
		]
	}
})