import {observable, action, useStrict} from 'mobx'

import * as utils from '../../utils'
useStrict(true)

class store {
	@observable login = false;
	@action check = async() => {
		if(this.login){
			return true
		}
		const result = await utils.clientCall('/api/loginStatus')
		return this.login = result.success
	}
	@action updateLogin(status){
		this.login = status
	}

	@action sendCode = async(params) => {
		const res = await utils.clientCall('/api/sendCode', params)
		return res.success ? res.data : null
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