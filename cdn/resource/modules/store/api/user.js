import {observable, action, useStrict} from 'mobx'

import * as utils from '../../utils'
useStrict(true)

class store {
	@action queryList = async(param) => {
		param.size = param.size || 10
		param.productType = param.productType || '1'
		const result = await utils.clientCall('/api/list', param)
		let list = result.success && result.data && result.data.records || []
		return Array.isArray(list) ? list : []
	}

	@action queryDetail = async(param) => {
		const res = await utils.clientCall('/api/detail', param)
		return res.success ? res.data : null
	}

	@action index = async(param) => {
		const res = await utils.clientCall('/api/index')
		return res.success ? res.data : null
	}

	@action account = async() => {
		const res = await utils.clientCall('/api/query/account')
		return res.success && res.data && res.data.accountAmount || 0
	}
	@action userDetail = async() => {
		const res = await utils.clientCall('/api/query/userDetail')
		return res.success && res.data && res.data || 0
	}

}


export default new store
