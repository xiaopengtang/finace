import React, {Component} from 'react'

export default class Index extends Component {
	state = {
		'tel': '',
		'pwd': '',
		'show': true
	};
	login () {}
	change (e) {}
	render () {
		return (
			<div className="home-index">
			    <div className="logo">
				<img src="/public/i/logo.png" style={{"width": "60%"}} />
				</div>
				<p style={{"position": "relative"}}>
					<input 
					type="text" 
					name="accountName" 
					id="telephoneNumber" 
					onChange={e => this.setState({'tel': e.target.value})}
					value={this.state.tel}
					placeholder="请输入您的手机号" /> 
					<img 
					src="/public/i/clear.png"
					className="inputImg" 
					id="tab1" 
					onClick={e => this.setState({'tel': ''})} />
				</p>
				<p style={{"position": "relative","marginBottom": "30px"}}>
					<input 
					type={this.state.show ? 'password' : 'text'} 
					name="password"
					id="passWord" 
					value={this.state.pwd}
					onChange={e => this.setState({'pwd': e.target.value})}
					placeholder="登录密码" /> 
					<img 
					src={this.state.show ? "/public/i/eyesclose.png" : "/public/i/eyesopen.png"}
					className="inputImg" id="tab2" onClick={e => this.setState({'show': !this.state.show})} />
				</p>
				<a className="LogBtn_s" onClick={this.login.bind(this)}>立即登录</a>
				<p style={{"marginTop": "20px"}}>
					<span className="goRegist"> <a href="javascript:goRegister();">立即注册</a></span>
					<span className="forget"><a
						href="http://m.maomibank.com:80/xed_financing_wxgzh/accountinfo/s/toGetBackLoginPassword">忘记密码？</a></span>
				</p>
				<p className="server">
					<a href="tel:400-000-3060">客服电话:400-000-3060</a>
				</p>
			</div>
		)
	}
}