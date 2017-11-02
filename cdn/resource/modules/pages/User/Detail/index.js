import React, {Component} from 'react'
import User from '../../../layout/user'
import {Link} from 'react-router-dom'
import { SegmentedControl, WingBlank, Card, WhiteSpace, Button, List, Icon} from 'antd-mobile'


export default class Index extends Component {
	render () {
		return (
		    <User module="list" className="home-detail" footer={<div className="detail-footer"><Link style={{'color': '#FFF'}} to="/apply">开始申请</Link></div>}>
		        <Card>
		            <div className="top">
			            <div className="item">
			                <div className="item-content">
				                <div className="label">金额</div>
				                <div className="input-field">
				                    <input type="text" />
				                    <span>元</span>
				                </div>
			                </div>
			                <div className="item-tip">金额为100-5000</div>
			            </div>
			            <div className="item">
			                <div className="item-content">
				                <div className="label">期限</div>
				                <div className="input-field">
				                    <input type="text" />
				                    <i className="icon icon-sort"></i>
				                </div>
			                </div>
			                <div className="item-tip">期限为1-24个月</div>
			            </div>
		            </div>
		        </Card>
		        <WhiteSpace size="sm" />
		        <Card>
		        	<Card.Header title="认证材料"></Card.Header>
		        	<Card.Body className="user-info">
		        		    <div className="user-title">
		        		        <i className="icon icon-user-circle"></i>
		        		        <span>个人信息</span>
		        		    </div>
		        		    <div className="user-res">
		        		        <div className="user-tag">
		        		            <span>已认证</span>
		        		            <i className="icon icon-check"></i>
		        		        </div>
		        		        <Icon type="right" color="#c7c7cc"></Icon>
		        		    </div>
		        	</Card.Body>
		        </Card>
		        <WhiteSpace size="sm" />
		        <List className="list">
			        <List.Item
			        extra={<div className="check-tag">去认证</div>}
			        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
			        arrow="horizontal"
			        onClick={() => {}}
			        >芝麻信用</List.Item>
			        <List.Item
			          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
			          onClick={() => {}}
			          extra={<div className="check-tag">去认证</div>}
			          arrow="horizontal"
			        >
			          联系人
			        </List.Item>
			      </List>
		    </User>
		)
	}
}