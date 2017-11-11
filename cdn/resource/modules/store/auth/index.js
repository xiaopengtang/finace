import {observable, action, useStrict} from 'mobx'
import axios from 'axios'
useStrict(true)

class store {
	@observable login = false;
	@action check = async() => {
		if(this.login){
			return true
		}
		const {'data': result} = await axios.get('/api/loginStatus')
		return this.login = result.success
	}
	@action updateLogin(status){
		this.login = status
	}
}

export default new store