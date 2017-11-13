'use strict';

module.exports = app => class UserController extends app.Controller {
	success (data) {
		this.ctx.set("Access-Control-Allow-Origin", "*")
		this.ctx.set('Access-Control-Allow-Credentials', true)
	    this.ctx.set("Access-Control-Allow-Headers", "x-requested-with,content-type")
	    this.ctx.set("Access-Control-Allow-Methods","POST,GET")  
		this.ctx.status = 200
		this.ctx.body = {
			'success': true,
			'msg': null,
			data,
			'errorCode': 7000001
		}
	}
	error(msg){
		msg = msg || null
		this.ctx.set("Access-Control-Allow-Origin", "*")
		this.ctx.set('Access-Control-Allow-Credentials', true)
	    this.ctx.set("Access-Control-Allow-Headers", "x-requested-with,content-type")
	    this.ctx.set("Access-Control-Allow-Methods","POST,GET")  
		this.ctx.status = 200
		this.ctx.body = {
			'success': false,
			'msg': msg,
			'data': null,
			'errorCode': 7000001
		}
	}
	ajaxReturn (res){
		return this[res.code == 1 ? 'success' :'error'](res.data)
	}
	*index(){
		const url = '/financial/product/list/recommend'
		const res = yield this.ctx.service.user.send(url)
		return this.ajaxReturn(res)
	}
	*loginStatus(){
		const login = this.ctx.session.token
		return this[login?'success':'error']()
	}
	*login(){
		const {query} = this.ctx
		const result = yield this.ctx.service.user.login(query)
		const token = result.data && result.data.token
		if(token){
			this.ctx.session.token = token
		}
		return this.success({ login: !!token})
	}
	*sendCode(){
		const {phone, type} = this.ctx.query
		const url = ({
			'register': 'http://yqh0303.com:15012/verfication/get/register/sms/code',
			'forget': 'http://yqh0303.com:15012/verfication/get/forget/sms/code'
		})[type || 'register']
		const res = yield this.ctx.service.user.send(url, {phone})
		return this.success(res.data)
	}
	*list(){
		const {query} = this.ctx
		query.status = 4
		const res = yield this.ctx.service.user.send('/financial/product/list/page', query)
		return this.success(res.data)
	}
	*detail(){
		const {query} = this.ctx
		const res = yield this.ctx.service.user.send('/financial/product/detail', query)
		return this.success(res.data)
	}
	*register(){
		const {query} = this.ctx
		const res = yield this.ctx.service.user.send('http://yqh0303.com:15012/user/register', query)
		return this[res.code == 1 ? 'success' : 'error'](res.data)
	}
	*forget(){
		const {query} = this.ctx
		const res = yield this.ctx.service.user.send('http://yqh0303.com:15012/user/forget/pwd/phone', query)
		return this[res.code == 1 ? 'success' : 'error'](res.data)
	}
	*loginout(){}
	*saveInfo(){}
}