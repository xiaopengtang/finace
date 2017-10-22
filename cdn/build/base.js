'use strict'

const webpack = require('webpack')
const moment = require('moment')
const pkg = require('../package.json')
const header = [
    `create by ${pkg.author}`
    ,`version:${pkg.version}`
    ,`GIT:${pkg.homepage}`
    ,`email:${pkg.email}`
    ,`last update:${moment().format("YYYY-MM-DD hh:mm:ss")}`
].join("\n")
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSASS = new ExtractTextPlugin('style.css')

module.exports = {
	'plugins': [
	    new webpack.BannerPlugin(header),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        extractSASS
	],
	'module': {
		'rules': [
		    {
                "test" : /\.css$/,
                "exclude" : /node_modules/,
                "use" : ["style-loader","css-loader?modules"]
            },
            {
                "test" : /\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/,
                "exclude" : /node_modules/,
                "use" : ["url-loader"]
            },
            {
                "test" : /\.scss/,
                "exclude" : /node_modules/,
                'use': extractSASS.extract({
                    'fallback': 'style-loader',
                    'use': ["css-loader","sass-loader"]
                })
            }
		]
	},
	"resolve" : {
        "extensions" : [".js", ".json", ".jsx", ".css",".scss"]
    }
}