'use strict'

const {CLIENT} = process.env

const config = require(CLIENT ? './build' : './server')

const webpack = require('webpack')

config.plugins.push(new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }})

module.exports = config