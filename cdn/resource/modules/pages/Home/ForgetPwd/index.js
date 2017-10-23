import React, {Component} from 'react'

export default class Index extends Component {
	state = {} ; 

	render () {
		return (
			<div className="home-forget">
			    <div className="logo">
					<img src="/public/i/logo.png" style={{'width': '60%'}} />
				</div>
				<ul>
				<li>
				    <i className="icon icon-user-o"></i>
				    <input type="text" name="telephone" id="telephoneNumber" value="" placeholder="请输入手机号" />
				</li>
				<li className="flex">
				    <i className="icon icon-check-circle-o"></i>
					<input className="f1" type="text" name="yzm" id="captcha" value="" placeholder="请输入短信验证码" />
					<input 
					    style={{"marginLeft": "10px","minWidth": "77px","marginTop": "11px"}}
					    type="button" name="" id="sentCaptcha" className="myButton" value="获取验证码" />
				</li>
				<li>
				    <i className="icon icon-lock"></i>
				    <input type="password" name="password" id="passWord_1" value="" placeholder="设置新登录密码" />
			    </li>
				<li>
				    <i className="icon icon-lock"></i>
				    <input type="password" name="" id="passWord_2" value="" placeholder="确认新登录密码" /></li>
				<li><div className="myButton_1" id="">确认修改</div></li>
			</ul>
			</div>
		)
	}
}