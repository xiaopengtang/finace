'use strict'

const path = require('path')

module.exports = {
	'WEB_PATH': path.resolve('../web'), //网站地址
	// 'CDN_PATH': path.resolve('../../../app/ionic/v1/www/public')  //静态资源打包地址
	'CDN_PATH': path.resolve('../web/resource/asserts')  //静态资源打包地址
}