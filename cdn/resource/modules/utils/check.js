export const checkTel = tel => {
	let ret = false
	if(!tel){
		ret.__proto__.getError = () => '请输入手机号'
		return ret
	}
	if(!/\d{11}/.test(tel)){
		ret.__proto__.getError = () => '请输入正确手机号'
		return ret
	}
	return true
}