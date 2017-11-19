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
// const extractCSS = new ExtractTextPlugin('style.css')

module.exports = {
    'plugins': [
        new webpack.BannerPlugin(header),
        /*new webpack.DefinePlugin({
            'process.env': { 
                NODE_ENV: JSON.stringify("production") 
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('common'),*/
        extractSASS,
        // extractCSS,
        // new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }})
    ],
    'module': {
        'rules': [
            {
                "test" : /\.css$/,
                // "exclude" : /node_modules/,
                "use" : extractSASS.extract({
                    'fallback': 'style-loader',
                    'use': ['css-loader', 'postcss-loader']
                }) //["style-loader","css-loader?modules", "postcss-loader"]
            },
            {
                "test" : /\.(woff)|(svg)|(eot)|(ttf)$/,
                "exclude" : /node_modules/,
                "use" : {
                    "loader": "url-loader"
                }
            },
            {
                "test": /\.(png)|(jpg)|(gif)$/,
                "exclude" : /node_modules/,
                "use" : ["file-loader"]
            },
            {
                "test" : /\.less/,
                "exclude" : /node_modules/,
                'use': extractSASS.extract({
                    'fallback': 'style-loader',
                    'use': ["css-loader", "postcss-loader", "less-loader"]
                })
            }
        ]
    },
    "resolve" : {
        "extensions" : [".js", ".json", ".jsx", ".css",".less"]
    }
}