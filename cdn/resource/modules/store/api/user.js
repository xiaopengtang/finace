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
}


export default new store