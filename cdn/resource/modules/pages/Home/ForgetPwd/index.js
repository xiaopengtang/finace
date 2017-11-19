import React, {Component} from 'react'

import PropTypes from 'prop-types'
import { Toast} from 'antd-mobile'

export default class Index extends Component {
	static contextTypes = {
		'$store': PropTypes.object.isRequired,
		'$utils': PropTypes.object.isRequired
	};
	state = {
		'timer': 60,
		'password': '',
		'phone': '',
		'verficationCode': '',
		'confirm': ''
	} ; 
	timer = null ;

	async sendCode() {
		if(this.timer){
			return
		}
		const {phone} = this.state
		const check = this.context.$utils.check.checkTel(phone)
		if(check === false){
			return Toast.info(check.getError())
		}
		const res = await this.context.$store.auth.sendCode({phone, 'type': 'forget'})
		if(!res.success){
			return Toast.fail(res.msg)
		}
		Toast.success('发送成功')
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

	async sure(){
		const {phone, confirm, password, verficationCode} = this.state
		const check = this.context.$utils.check.checkTel(phone)
		if(check === false){
			return Toast.info(check.getError())
		}
		if(!verficationCode){
			return Toast.info('请输入短信验证码')
		}
		if(!/^\d+$/.test(verficationCode)){
			return Toast.info('请正确输入短信验证码')
		}
		if(!password){
			return Toast.info('请输入密码')
		}
		if(!confirm){
			return Toast.info('请确认输入密码')
		}
		if(confirm !== password){
			return Toast.info('两次密码不同，请确认')
		}
		const res = await this.context.$store.auth.forget({phone, verficationCode, password})
		if(res.success){
			Toast.info('修改成功')
			return setTimeout(() => this.props.history.push('/'), 3000)
		}else{
			return Toast.info('修改失败')
		}
	}

	render () {
		return (
			<div className="home-forget">
			    <div className="logo">
					<div className="logo-img">LOGO</div>
				</div>
				<ul>
				<li>
				    <i className="icon icon-user-o"></i>
				    <input 
				        onChange={e => this.setState({'phone': e.currentTarget.value})}
					    value={this.state.phone}
				        type="text" name="telephone" id="telephoneNumber"  placeholder="请输入手机号" />
				</li>
				<li className="flex">
				    <i className="icon icon-check-circle-o"></i>
					<input 
					    onChange={e => this.setState({'verficationCode': e.currentTarget.value})}
					    value={this.state.verficationCode}
					    className="f1" type="text" name="yzm" id="captcha"  placeholder="请输入短信验证码" />
					<input 
					    onClick={this.sendCode.bind(this)}
					    style={{"marginLeft": "10px","minWidth": "77px","marginTop": "11px"}}
					    type="button" name="" id="sentCaptcha" className={`myButton ${this.state.timer  !== 60 ? 'active' : ''}`} value={this.state.timer !== 60 ? `${this.state.timer}s后重新发送` :'获取验证码'} />
				</li>
				<li>
				    <i className="icon icon-lock"></i>
				    <input 
				        onChange={e => this.setState({'password': e.currentTarget.value})}
					    value={this.state.password}
				        type="password" name="password" id="passWord_1"  placeholder="设置新登录密码" />
			    </li>
				<li>
				    <i className="icon icon-lock"></i>
				    <input 
				        onChange={e => this.setState({'confirm': e.currentTarget.value})}
					    value={this.state.confirm}
				        type="password" name="" id="passWord_2"  placeholder="确认新登录密码" /></li>
				<li><div className="myButton_1" id="" onClick={this.sure.bind(this)}>确认修改</div></li>
			</ul>
			</div>
		)
	}
}