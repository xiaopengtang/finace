import React, {Component} from 'react'
import User from '../../../layout/user'
import { NoticeBar, Toast, WingBlank, Card, WhiteSpace, Button, List, Icon, Checkbox, Steps, InputItem, Modal} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class Index extends Component {
	static contextTypes = {
		'$store': PropTypes.object.isRequired,
		'$utils': PropTypes.object.isRequired
	};
	state = {
		'accountAmount': 0,
		'investmentAmount': 0,
		'scale': 0
	}
	async componentWillMount(){
		const accountAmount = await this.context.$store.api.user.account()
		let scale = this.context.$utils.queryString('scale', this.props.location.search)
		scale = parseFloat((parseFloat(scale) * 0.0001).toFixed(4))
		scale = isNaN(scale) ? 0 : scale
		// console.log({scale})
		this.setState({accountAmount, scale})
	}
	async applyAccout(){
		const {accountAmount, investmentAmount} = this.state
		if(!investmentAmount){
			return Toast.info('请输入投资金额')
		}
		if(accountAmount < investmentAmount){
			const status = await new Promise(resolve => Modal.alert('温馨提示', '您的账户余额不足，是否充值？', [
		    {'text': '取消'},
		    {'text': '前往', 'onPress': () => resolve(true)}
			]))
			return status && this.props.history.push('/recharge')
		}
		const productCode = this.context.$utils.queryString('id', this.props.location.search)
		const res = await this.context.$utils.clientCall('/api/saveOrder',{investmentAmount, productCode})
	    if(res.success){
	    	Toast.success('下单成功', 1)
	    }else{
	    	Toast.fail('下单失败', 1)
	    }
	    setTimeout(() => this.props.history.push('/'), 2000)
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
		           <div className="show-num" data-txt={(this.state.scale * this.state.investmentAmount).toFixed(2)}>元</div>
		        </div>
		        <WhiteSpace size="sm" />
		        {/*<NoticeBar 
		        		        mode="closable">该信息将作为你的实名凭证，请确保真实</NoticeBar>*/}
			    <List>
			        <List.Item className="input-money">
			            <label>¥</label>
			            <input 
			                value={this.state.investmentAmount} type="number" onChange={e => this.setState({'investmentAmount': e.currentTarget.value})}/>
			        </List.Item>
			    	<List.Item>
			    		账户余额<List.Item.Brief>{this.state.accountAmount}元</List.Item.Brief>
			    	</List.Item>
			    </List>
			        
		    </User>
		 )
	}
}