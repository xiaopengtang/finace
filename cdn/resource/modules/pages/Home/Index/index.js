import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import axios from 'axios'
import { Toast} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class Index extends Component {
	static contextTypes = {
		'$store': PropTypes.object.isRequired
	};
	state = {
		'tel': '',
		'pwd': '',
		'show': true
	};
	componentDidMount(){
		// console.log(['this.props',this])
	}
	async login () {
		const {tel, pwd} = this.state
		if(!tel){
			return Toast.info('请输入您的手机号')
		}
		if(!/\d{11}/.test(tel)){
			return Toast.info('请正确输入手机号')
		}
		if(!pwd){
			return Toast.info('请输入密码')
		}
		const {data} = await axios.get('/api/login', {
			'account': tel,
			'password': pwd
		})
		if (data.success && data.data && data.data.login) {
			this.context.$store.auth.updateLogin(true)
			this.props.history.push('/home')
		}
	}
	change (e) {}
	render () {
		return ( 
			<div className="home-index">
			    <div className="logo">
				<img src="public/i/logo.png" style={{"width": "60%"}} />
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
					src="public/i/clear.png"
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
					src={this.state.show ? "public/i/eyesclose.png" : "public/i/eyesopen.png"}
					className="inputImg" id="tab2" onClick={e => this.setState({'show': !this.state.show})} />
				</p>
				<div className="LogBtn_s" to="/home" onClick={this.login.bind(this)}>立即登录</div>
				<p style={{"marginTop": "20px"}}>
					<span className="goRegist"> <Link to="/register">立即注册</Link></span>
					<span className="forget"><Link to="/forgetPwd">忘记密码？</Link></span>
				</p>
				<p className="server">
					<a href="tel:400-000-3060">客服电话:400-000-3060</a>
				</p>
			</div>
		)
	}
}