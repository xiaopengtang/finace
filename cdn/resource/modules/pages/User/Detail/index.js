import React, {Component} from 'react'
import User from '../../../layout/user'
import { SegmentedControl, WingBlank, Card, WhiteSpace, Button } from 'antd-mobile'

export default class Index extends Component {
	render () {
		return (
		    <User module="list" className="home-detail" footer={<div className="detail-footer">开始申请</div>}>
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
				                    <span>月</span>
				                </div>
			                </div>
			                <div className="item-tip">期限为1-24个月</div>
			            </div>
		            </div>
		        </Card>
		    </User>
		)
	}
}