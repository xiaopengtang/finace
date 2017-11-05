import React, {Component} from 'react'
import {Link} from  'react-router-dom'

export default class Index extends Component{
	state = {
		'tel': '',
		'code': '',
		'pwd': '',
		'phone': '',
		'isRead': false,
		'timer': 60,
		'show': true
	} ;

	sendCode () {}

	checkCode () {}

	render () {
		return (
			<div className="home-register">
				<div className="logo">
					<img src="public/i/logo.png" style={{'width': '60%'}} /><input type="hidden" id="result" value="" />
				</div>
				<div className="center"> 
					<ul>
						<li>
							<input 
							    onChange={e => this.setState({'tel': e.currentTarget.value})}
							    value={this.state.tel}
							    type="text" name="telephone" id="telephoneNumber" placeholder="请输入注册手机号"/>
							<i 
							    onClick={e => this.setState({'tel': ''})}
							    id="tab1" className="icon icon-close"></i>
						</li>
						<li>
						    <input 
						        value={this.state.code}
						        onChange={e => this.setState({'code': e.currentTarget.value})}
						        id="captcha" name="yzm" type="text" placeholder="请输入验证码" />
						    <span 
						        onClick={this.sendCode.bind(this)} 
						        onBlur={this.checkCode.bind(this)} 
						        id="sentCaptcha" className="yzm_span">获取验证码</span>
						</li>
						<li>
						    <input 
						        value={this.state.pwd}
						        onChange={e => this.setState({'pwd': e.currentTarget.value})}
						        type={this.state.show ? 'password': 'text'} name="password" id="passWord_1" placeholder="设置登录密码" />
						    <i id="tab2" 
						        onClick={e => this.setState({'show': !this.state.show})}
						        className={`icon ${this.state.show ? 'icon-eye-slash' : 'icon-eye'}`}></i>
					    </li>
						<li>
						    <input 
						        value={this.state.phone}
						        onChange={e => this.setState({'phone': e.currentTarget.value})}
						        type="text" name="recommendTelephone" id="phone" value="" placeholder="推荐人手机号（非必填）" />
					    </li>
					</ul>
				</div>
				<div className="reg">
					<span className="regbutton_sub" >立即注册</span>
					<p className="regp">
						<Link to="/" id="reg_a">已有账号去登录 &gt;</Link>
					</p>
				</div>
				<div className="foter">
					<i 
					    onClick={e => this.setState({'isRead': !this.state.isRead})}
					    className={`img2 icon ${this.state.isRead ? 'icon-check-square-o' : 'icon-square-o'}`}></i>
					&nbsp; 
					<a id="reg_a" href="http://m.maomibank.com:80/xed_financing_wxgzh/registrationProtocol.jsp">注册即代表同意 《猫咪财富服务协议》</a>
				</div>
			</div>
		)
	}
}