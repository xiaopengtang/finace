'use strict';

const path = require('path')

const cdn = require('./config.cdn')

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1508657324896_9661';
  exports.cdn = cdn
  // add your config here
  config.middleware = [];

  config.view = {
    root: path.join(appInfo.baseDir, 'resource/view'),
  	defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      '.nj': 'nunjucks'
    }
  }

  config.static = {
    dir: path.join(appInfo.baseDir,'resource/asserts')
  }

  exports.session = {
    key: 'SAIER_KEY',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true
  }

  return config;
};
