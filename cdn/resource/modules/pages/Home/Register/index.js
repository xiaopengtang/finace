import React, {Component} from 'react'
import {Link} from  'react-router-dom'
import PropTypes from 'prop-types'
import { Toast} from 'antd-mobile'

export default class Index extends Component{
	static contextTypes = {
		'$store': PropTypes.object.isRequired,
		'$utils': PropTypes.object.isRequired
	};
	state = {
		'tel': '',
		'code': '',
		'pwd': '',
		'phone': '',
		'isRead': false,
		'timer': 60,
		'show': true,
		'isAllow': false
	} ;
	timer = null;

	async sendCode () {
		if(this.timer){
			return
		}
		// console.log(this)
		const {tel} = this.state
		const check = this.context.$utils.check.checkTel(tel)
		if(check === false){
			return Toast.info(check.getError())
		}
		const res = await this.context.$store.auth.sendCode({'phone': tel})
		if(!res.success){
			return Toast.info(res.msg)
		}
		this.timer = setInterval(() => {
			let {timer} = this.state
			timer--
			if(timer === 0){
				clearInterval(this.timer)
				timer = 60
				delete this.timer
			}
			this.setState({timer})
		}, 1000)
	}

	checkCode () {}

	async register(){
		const {tel} = this.state
		const check = this.context.$utils.check.checkTel(tel)
		if(check === false){
			return Toast.info(check.getError())
		}
		if(!this.state.code){
			return Toast.info('请输入验证码')
		}
		if(!/^\d+$/.test(this.state.code)){
			return Toast.info('请输入正确的验证码')
		}
		if(!this.state.pwd){
			return Toast.info('请输入密码')
		}
		if(this.state.phone && !/^\d{11}$/.test(this.state.phone)){
			return Toast.info('请正确输入推荐人手机号')
		}
		const params = {
		    "password": this.state.pwd,
		    "phone": this.state.tel,
		    "phoneVerficationCode": this.state.code,
		    "recommenderPhone": this.state.phone
		}
		const res = await this.context.$store.auth.register(params)
		if(res.success){
			Toast.info('注册成功')
			return setTimeout(() => this.props.history.push('/'), 3000)
		}else{
			return Toast.info('注册失败')
		}
		// console.log(res)
	}

	render () {
		return (
			<div className="home-register">
				<div className="logo">
					<div className="logo-img">LOGO</div><input type="hidden" id="result" value="" />
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
						        id="sentCaptcha" className={`yzm_span ${this.state.timer  !== 60 ? 'active' : ''}`}>{this.state.timer !== 60?`${this.state.timer}s后重新发送`:'获取验证码'}</span>
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
						        type="text" name="recommendTelephone" id="phone" placeholder="推荐人手机号（非必填）" />
					    </li>
					</ul>
				</div>
				<div className="reg">
					<span className="regbutton_sub" onClick={this.register.bind(this)}>立即注册</span>
					<p className="regp">
						<Link to="/" id="reg_a">已有账号去登录 &gt;</Link>
					</p>
				</div>
				{/*<div className="foter">
					<i 
					    onClick={e => this.setState({'isRead': !this.state.isRead})}
					    className={`img2 icon ${this.state.isRead ? 'icon-check-square-o' : 'icon-square-o'}`}></i>
					&nbsp; 
					<a id="reg_a" href="http://m.maomibank.com:80/xed_financing_wxgzh/registrationProtocol.jsp">注册即代表同意 《猫咪财富服务协议》</a>
				</div>*/}
			</div>
		)
	}
}