import axios from 'axios'

export const async_import = cb => new Promise(resolve => cb(source => {
	const aim = '__esModule' in source && source.__esModule && source.default || source
    resolve(aim)
}));


export * as check from './check'


export const clientCall = async(setting, value) => {
	setting = isObject(setting) ? setting
	: isString(setting) ? {url: setting, data: value} : {}
	let {url, data, method} = setting || {}
	const G = typeof window !== 'undefined' ? window.G : {'isApp': false}
	url = (G.isApp ? 'http://1989591.51vip.biz:7001': '') + url
	method = method || 'get'
	const isGET = /get/i.test(method)
	const params = {
		url,
		method: method,
		data: isGET ? null : data,
		params: isGET ? data : null, 
		responseType: 'json',
		transformRequest: [function (data) {
		    let ret = []
		    for (let it in data) {
		      ret.push(`${encodeURIComponent(it)}=${encodeURIComponent(data[it])}`)
		    }
		    return ret.join('&')
		}]
	}
	if(/post/i.test(params.method)){
		params.headers = {
		    'Content-Type': 'application/x-www-form-urlencoded'
		}
	}
	return new Promise(resolve => axios(params).then(api => resolve(api.data)).catch(() => resolve({'success': false, 'data': null, 'msg': null, 'errorCode': 900001}))) 
}

export const type = data => {
	const r = /\[object (\w+)\]/
	if(!r.test(Object.prototype.toString.apply(data))){
		return 'null'
	}
	const ret = RegExp.$1
	return ret.toLowerCase()
}

export const isFunction = data => type(data) === 'function'

export const isString = data => type(data) === 'string'

export const isObject = data => type(data) === 'object'

export const queryString = (name, search) => {
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)")
    search = search || typeof window !== 'undefined' && window.location.search || ''
    let r = search.substr(1).match(reg)
    return r !== null ? unescape(r[2]) : null
}