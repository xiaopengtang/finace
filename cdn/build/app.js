'use strict'

const merge = require('webpack-merge')

const CDN = require('../cdn.config')

const path = require('path')

const base = require('./base')

const webpack = require('webpack')

module.exports = merge(base, {
    'entry': {
        'main': path.resolve(__dirname,'../resource/app.js')
    },
    'plugins': [
    ],
    'output': {
        'library': '[name]',
        'libraryTarget': 'umd',
        'filename': "[name].bundle.js",
        'chunkFilename': "[name].chunk.js",
        'path': CDN.APP_PATH,
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