'use strict'

const webpack = require('webpack')
const moment = require('moment')
const pkg = require('../package.json')
const header = [
    `create by ${pkg.author}`
    ,`version:${pkg.version}`
    ,`email:${pkg.email}`
    ,`last update:${moment().format("YYYY-MM-DD hh:mm:ss")}`
].join("\n")
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSASS = new ExtractTextPlugin('style.css')

module.exports = {
    'entry': {
        'common': ['react', 'react-dom', 'react-router', 'mobx', 'axios']
    },
    'plugins': [
        new webpack.BannerPlugin(header),
        new webpack.optimize.CommonsChunkPlugin('common'),
        extractSASS
    ],
    'module': {
        'rules': [
            {
                "test" : /\.css$/,
                "exclude" : /node_modules/,
                "use" : ["style-loader","css-loader?modules", "postcss-loader"]
            },
            {
                "test" : /\.(woff)|(svg)|(eot)|(ttf)$/,
                "exclude" : /node_modules/,
                "use" : ["url-loader"]
            },
            {
                "test": /\.(png)|(jpg)|(gif)$/,
                "exclude" : /node_modules/,
                "use" : ["file-loader"]
            },
            {
                "test" : /\.scss/,
                "exclude" : /node_modules/,
                'use': extractSASS.extract({
                    'fallback': 'style-loader',
                    'use': ["css-loader", "postcss-loader", "sass-loader"]
                })
            }
        ]
    },
    "resolve" : {
        "extensions" : [".js", ".json", ".jsx", ".css",".scss"]
    }
}