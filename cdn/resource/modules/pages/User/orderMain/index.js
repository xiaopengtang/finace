import React, {Component} from 'react'
import User from '../../../layout/user'
import {Link} from 'react-router-dom'
import { SegmentedControl, WingBlank, Card, WhiteSpace, Button, List, Icon, Accordion } from 'antd-mobile'


export default class Index extends Component {
	render () {
		return (
		    <User module="list" className="home-order-main" footer={<div className="detail-footer"><Link style={{'color': '#FFF'}} to="/apply">立即投资</Link></div>}>
		        <div className="top-content">
		            <div className="top-present">预期年化收益率（%）</div>
		            <div className="top-title">14.00</div>
		            <div className="top-tip">进度100%,剩余可投金额0.00元</div>
		        </div>
		        <WhiteSpace size="sm" />
		        <Accordion>
		            <Accordion.Panel header={<span className="icon icon-file"> 项目详情 </span>}>
		                <ul className="mdl-content">
		                    <li>
		                    	<label>测试</label>
		                        <span>测试下</span>
		                    </li>
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