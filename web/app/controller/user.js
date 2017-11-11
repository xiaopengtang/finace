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
		return this.success({ login: true })
	}
	*loginout(){}
	*saveInfo(){}
}