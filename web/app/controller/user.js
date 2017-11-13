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
	*account(){
		const url = 'http://1989591.51vip.biz:15003/account/get'
		const ret = yield this.ctx.service.user.send(url, {
			'userId': this.ctx.session.user.userId
		})
		return this.ajaxReturn(ret)
	}	
	*loginStatus(){
		
		const {token, ...other} = this.ctx.session.user || {}
		const login = !!token
		const user = {...other}
		return this[login?'success':'error']({login, user})
	}
	*login(){
		const {query} = this.ctx
		const result = yield this.ctx.service.user.login(query)
		const {token, ...other} = result.data || {}
		if(token){
			this.ctx.session.user = result.data || null
			// this.ctx.session.token = token
		}
		return this.success({ login: !!token, user: {...other}})
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
	*loginout(){
		this.ctx.session.user = null
		return this.success()
	}
	*saveInfo(){}
}