'use strict';

module.exports = app => class UserController extends app.Controller {
	success (data) {
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
		this.ctx.status = 200
		this.ctx.body = {
			'success': false,
			'msg': msg,
			'data': null,
			'errorCode': 7000001
		}
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
		return this.success({ login: !!token, result, query })
	}
	*sendCode(){
		const {phone, type} = this.ctx.query
		const url = ({
			'register': '/verfication/get/register/sms/code',
			'forget': '/verfication/get/forget/sms/code'
		})[type || 'register']
		const res = yield this.ctx.service.user.send(url, {phone})
		return this.success(res.data)
	}
	*list(){
		const {query} = this.ctx
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
		const res = yield this.ctx.service.user.send('/user/register', query)
		return this[res.code == 1 ? 'success' : 'error'](res.data)
	}
	*forget(){
		const {query} = this.ctx
		const res = yield this.ctx.service.user.send('/user/forget/pwd/phone', query)
		return this[res.code == 1 ? 'success' : 'error'](res.data)
	}
	*loginout(){}
	*saveInfo(){}
}