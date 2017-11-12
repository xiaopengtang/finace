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
		return this.ctx.service.user.send(url, {phone})
	}
	*loginout(){}
	*saveInfo(){}
}