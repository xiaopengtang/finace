module.exports = app => class User extends app.Service{
	*send(url, data){
		const r = /^(http|https)/
		if(!r.test(url)){
			url = 'http://yqh0303.com:15012'+ url
		}
		const res = yield this.ctx.curl(url, {
			'method': 'post',
			'dataType': 'json',
			'contentType': 'json',
			data
		})
		return res.data
	}
	*login(data){
		return yield this.send('http://1989591.51vip.biz:16000/api/jwt/auth', data)
	}
}