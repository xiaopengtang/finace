import React, {Component} from 'react'
import User from '../../../layout/user'
import { NoticeBar, WingBlank, Card, WhiteSpace, Button, List, Icon, Checkbox, Steps, InputItem} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class Index extends Component {
	static contextTypes = {
		'$store': PropTypes.object.isRequired,
		'$utils': PropTypes.object.isRequired
	};
	state = {
		'accountAmount': 0
	}
	async componentDidMount(){
		const accountAmount = await this.context.$store.api.user.account()
		this.setState({accountAmount})
	}
	async applyAccout(){
		// 
	}
	render () {
		return (
		    <User title="投资操作" module="list" className="user-apply" 
		    footer={<div className="apply-footer">
		        {/*<Checkbox.AgreeItem ><a className="apply-footer-notice">我已阅读并同意《贷款申请书》</a></Checkbox.AgreeItem>*/}
		        <div className="apply-footer-btm" onClick={this.applyAccout.bind(this)}>立即投资</div>
		    </div>}>
		        <div className="show-mony">
		           <div className="show-title">实际投资收益</div>
		           <div className="show-num" data-txt="5">元</div>
		        </div>
		        <WhiteSpace size="sm" />
		        {/*<NoticeBar 
		        		        mode="closable">该信息将作为你的实名凭证，请确保真实</NoticeBar>*/}
			    <List>
			        <InputItem
				        type="money"
				        className="input-money"
			            placeholder="请输入100整数倍"
			            clear
			            labelNumber="2"
			            moneyKeyboardAlign="left"
			            >¥</InputItem>
			    	<List.Item>
			    		账户余额<List.Item.Brief>{this.state.accountAmount}元</List.Item.Brief>
			    	</List.Item>
			    </List>
			        
		    </User>
		 )
	}
}