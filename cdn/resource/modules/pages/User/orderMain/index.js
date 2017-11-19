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
			'financialRecordList': [],
			'financialUser': {}
		},
		'scale': 0,
		'productCode': null
	}
	async componentWillMount(){
		const productCode = this.context.$utils.queryString('id', this.props.location.search)
		// console.log(this)
		// console.log(productCode)
		const info = await this.context.$store.api.user.queryDetail({productCode})

		if(!info){
			return
		}
		let {preYearRate, deadlineDays} = info.financialProduct
		preYearRate = isNaN(preYearRate) ? 0 : preYearRate
		deadlineDays = isNaN(deadlineDays) ? 0 : deadlineDays
		const scale = parseInt(((preYearRate * 0.01 * deadlineDays) / 365) * 10000)
		// preYearRate = parseFloat(preYearRate)
		this.setState({info, scale, productCode})
	}
	render () {
		const {info} = this.state
		return (
		    <User
		        title={info.financialProduct.productName}
		        module="list" 
		        className="home-order-main" 
		        footer={<div className="detail-footer"><Link style={{'display': 'block','color': '#FFF', 'width': '100%'}} to={{
		        	'pathname': '/apply',
		        	'search': `?id=${this.state.productCode}&scale=${this.state.scale}`
		        }}>立即投资</Link></div>}>
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
		                    	<label>姓名</label>
		                        <span>{info.financialUser.addUser}</span>
		                    </li>
		                    <li>
		                    	<label>性别</label>
		                        <span>{([,'男','女'])[info.financialUser.sex]}</span>
		                    </li>
		                    <li>
		                    	<label>年龄</label>
		                        <span>{info.financialUser.age}</span>
		                    </li>
		                    <li>
		                    	<label>居住地</label>
		                        <span>{info.financialUser.adress}</span>
		                    </li>
		                </ul>
		            </Accordion.Panel>
		            <Accordion.Panel header={<span className="icon icon-car"> 车辆基本资料 </span>}>
		                <ul className="mdl-content">
		                    <li>
		                    	<label>车辆型号</label>
		                        <span>{info.financialCar.carModel}</span>
		                    </li>
		                    <li>
		                    	<label>车辆颜色</label>
		                        <span>{info.financialCar.carColor}</span>
		                    </li>
		                    <li>
		                    	<label>车牌号</label>
		                        <span>{info.financialCar.carNum}</span>
		                    </li>
		                    <li>
		                    	<label>购买价格</label>
		                        <span>{info.financialCar.carPrice}</span>
		                    </li>
		                    <li>
		                    	<label>抵押价格</label>
		                        <span>{info.financialCar.mortgagePrice}</span>
		                    </li>
		                    <li>
		                    	<label>车辆年限</label>
		                        <span>{info.financialCar.carLife}年</span>
		                    </li>
		                </ul>
		            </Accordion.Panel>
		            <Accordion.Panel header={<span className="icon icon-file-word-o"> 资质审核 </span>}>
		                <ul className="mdl-content">
							<li>
								<label>审核资料</label>
								<span>审核结果</span>
							</li>
							<li>
								<label>合同资料:</label>
								<span>{info.financialAudit.contract == 2?'通过':'未通过'}</span>
							</li>
							<li>
								<label>登记证书:</label>
								<span>{info.financialAudit.registrationCertificate == 2?'通过':'未通过'}</span>
							</li>
							<li>
								<label>行驶证:</label>
								<span>{info.financialAudit.drivingLicense == 2?'通过':'未通过'}</span>
							</li>
							<li>
								<label>人车合影:</label>
								<span>{info.financialAudit.manCarPhoto == 2?'通过':'未通过'}</span>
							</li>
							<li>
								<label>借款承诺书:</label>
								<span>{info.financialAudit.acceptanceAgreement == 2?'通过':'未通过'}</span>
							</li>
							<li>
								<label>二代身份证:</label>
								<span>{info.financialAudit.certificate == 2?'通过':'未通过'}</span>
							</li>
							<li>
								<label>身份证验证图:</label>
								<span>{info.financialAudit.certificatePhoto == 2?'通过':'未通过'}</span>
							</li>
							<li>
								<label>抵押情况声明:</label>
								<span>{info.financialAudit.mortgageDeclare == 2?'通过':'未通过'}</span>
							</li>
							<li>
								<label>违章信息:</label>
								<span>{info.financialAudit.peccancy == 2?'通过':'未通过'}</span>
							</li>
							<li>
								<label>铭牌照片:</label>
								<span>{info.financialAudit.nameplatePhoto == 2?'通过':'未通过'}</span>
							</li>

		                </ul>
		            </Accordion.Panel>
		            <Accordion.Panel header={<span className="icon icon-file-text"> 投资记录 </span>}>
		                <List>{info.financialRecordList.map(d => (
		                	<List.Item multipleLine extra={d.amount + '元'}>
					            {d.phone} <List.Item.Brief>{d.addTime}</List.Item.Brief>
					        </List.Item>
		                	))}</List>
		            </Accordion.Panel>
		        </Accordion>
		    </User>
		)
	}
}
