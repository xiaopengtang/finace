import React, {Component} from 'react'
import User from '../../../layout/user'
import {Link} from 'react-router-dom'
import { SegmentedControl, WingBlank, Card, WhiteSpace, Button, List, Icon, Accordion } from 'antd-mobile'
import PropTypes from 'prop-types'

export default class Index extends Component {
	static contextTypes = {
		'$store': PropTypes.object.isRequired,
		'$utils': PropTypes.object.isRequired
	};
	state = {
		'info': {
			'financialProduct': {},
			'financialAudit': {},
			'financialCar': {},
			'financialFileList': {},
			'financialRecordList': {},
			'financialUser': {}
		}
	}
	async componentDidMount(){
		const productCode = this.context.$utils.queryString('id', this.props.location.search)
		const info = await this.context.$store.api.user.queryDetail({productCode})
		// console.log(info)
		if(!info){
			return
		}
		this.setState({info})
	}
	render () {
		const {info} = this.state
		return (
		    <User 
		        title={info.financialProduct.productName}
		        module="list" 
		        className="home-order-main" 
		        footer={<div className="detail-footer"><Link style={{'color': '#FFF'}} to="/apply">立即投资</Link></div>}>
		        <div className="top-content">
		            <div className="top-present">预期年化收益率（%）</div>
		            <div className="top-title">{info.financialProduct.preYearRate}</div>
		            <div className="top-tip">进度{(((info.financialProduct.totalAmount - info.financialProduct.availableAmount)/info.financialProduct.totalAmount)*100).toFixed(2)}%,剩余可投金额{info.financialProduct.availableAmount}元</div>
		        </div>
		        <WhiteSpace size="sm" />
		        <Accordion>
		            <Accordion.Panel header={<span className="icon icon-file"> 项目详情 </span>}>
		                <ul className="mdl-content">
		                    <li>
		                    	<label>项目名称</label>
		                        <span>{info.financialProduct.productName}</span>
		                    </li>
		                    <li>
		                    	<label>预期年化收益</label>
		                        <span>{info.financialProduct.preYearRate}%</span>
		                    </li>
		                    <li>
		                    	<label>标总金额</label>
		                        <span>{info.financialProduct.totalAmount}</span>
		                    </li>
		                    <li>
		                    	<label>投资期限</label>
		                        <span>{info.financialProduct.deadline}{([,'天','周','月','年'])[info.financialProduct.deadlineUnit]}</span>
		                    </li>
		                    <li>
		                    	<label>起投金额</label>
		                        <span>{info.financialProduct.leastAmount}</span>
		                    </li>
		                    <li>
		                    	<label>还款方式</label>
		                        <span>{([,'等额本息','先息后本'])[info.financialProduct.repaymentMethod]}</span>
		                    </li>
		                    <li>描述：{info.financialProduct.remark}</li>
		                </ul>
		            </Accordion.Panel>
		            <Accordion.Panel header={<span className="icon icon-user"> 贷款人基本资料 </span>}>
		                <ul className="mdl-content">
		                    <li>
		                    	<label>测试</label>
		                        <span>测试下</span>
		                    </li>
		                </ul>
		            </Accordion.Panel>
		            <Accordion.Panel header={<span className="icon icon-car"> 车辆基本资料 </span>}>
		                <ul className="mdl-content">
		                    <li>
		                    	<label>测试</label>
		                        <span>测试下</span>
		                    </li>
		                </ul>
		            </Accordion.Panel>
		            <Accordion.Panel header={<span className="icon icon-file-word-o"> 资质审核 </span>}>
		                <ul className="mdl-content">
		                    <li>
		                    	<label>测试</label>
		                        <span>测试下</span>
		                    </li>
		                </ul>
		            </Accordion.Panel>
		            <Accordion.Panel header={<span className="icon icon-file-text"> 投资记录 </span>}>
		                <ul className="mdl-content">
		                    <li>
		                    	<label>测试</label>
		                        <span>测试下</span>
		                    </li>
		                </ul>
		            </Accordion.Panel>
		        </Accordion>
		    </User>
		)
	}
}