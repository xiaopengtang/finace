import {observable, action, useStrict} from 'mobx'

import * as utils from '../../utils'
useStrict(true)

class store {
	@observable login = false;
	@observable user = {} ;
	@action check = async() => {
		if(this.login){
			return true
		}
		const result = await utils.clientCall('/api/loginStatus')
		this.updateStatus(result)
		return this.login
	}
	@action updateStatus(api){
		const {login, user} = api.success && api.data || {}
		this.login = login
		this.user = user
	}
	@action doLogin = async(params) => {
		const res = await utils.clientCall('/api/login', params)
		this.updateStatus(res)
		return res
	}
	@action updateLogin(status){
		this.login = status
	}

	@action loginout = async(params) => {
		const res = await utils.clientCall('/api/loginout', params)
		this.updateStatus(res)
		return res
	}

	@action sendCode = async(params) => {
		const res = await utils.clientCall('/api/sendCode', params)
		return res
	}

	@action sendRegisterCode = async(params) => {
		return await utils.clientCall('/api/sendRegisterCode', params)
	}

	@action register = async(params) => {
		return await utils.clientCall('/api/register', params)
	}

	@action forget = async(params) => {
		return await utils.clientCall('/api/forget', params)
	}
}

export default new store
