'use strict'

const path = require('path')

module.exports = {
	'WEB_PATH': path.resolve('../web'), //网站地址
	'APP_PATH': path.resolve('../app/www/public'),  //静态资源打包地址 - for app
	'CDN_PATH': path.resolve('../web/resource/asserts'),  //静态资源打包地址
	'COMPONENT_PATH': path.resolve('../web/resource/component') // 服务器端组件打包地址
}