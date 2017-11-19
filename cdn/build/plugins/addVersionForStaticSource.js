'use strict'


function addVersionForStaticSource(opt){}

addVersionForStaticSource.prototype.apply = function(compiler){
	/*compiler.plugin('compile', (file, content, fileStr) => {
		console.log({fileStr, file, content})
		return ''
	})*/
}

module.exports = addVersionForStaticSource