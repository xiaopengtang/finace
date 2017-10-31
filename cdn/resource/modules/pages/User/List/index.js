import React, {Component} from 'react'
import User from '../../../layout/user'
import { SegmentedControl, WingBlank, Card, WhiteSpace, Button } from 'antd-mobile'
import {Link} from 'react-router-dom'

export default class Index extends Component {
	render () {
		return (
		    <User module="list" className="home-list" title="贷款">
		        <div style={{'backgroundColor': '#FFF', 'padding': '10px 0'}}>
		        	<WingBlank>
			        	<SegmentedControl values={['极速贷', '银行贷']}/>
			        </WingBlank>
		        </div>
		        <div className="price-info">
		           <div className="price-title">贷款额度<i>0</i>元</div>
		           <Button icon={<i className="icon icon-line-chart"></i>}>提升额度</Button>
		        </div>
		        <div className="hot-list">
		        	<Card full>
				        <Card.Header title="工行乐信贷"></Card.Header>
				        <Card.Body>
				            <ul className="list-content">
				                <li>
				                	<div className="price-mony">2000</div>
				                	<div className="price-sub">测试下</div>
				                </li>
				                <li className="main-price">
				                	<div className="info">
				                	    <span className="font-green">10分钟</span><span>放款</span>
				                	</div>
				                	<div className="info">月费率10%</div>
				                	<div className="info">贷款期限3~12月</div>
				                </li>
				                <li>
				                    <Link to="/detail">
				                    	<div className="label">一键申请</div>
				                    </Link>
				                </li>
				            </ul>
				        </Card.Body>
				        <Card.Footer content={<div className="price-btm">
				            <div className="label-tag">
				                <span className="label red">提额</span>
				                <span>老用户老用户老用户老用户</span>
				            </div>
				            <div className="label-tag">
				                <span className="label green">提额</span>
				                <span>老用户老用户老用户老用户</span>
				            </div>
				            <div className="label-tag">
				                <span className="label yellow">提额</span>
				                <span>老用户老用户老用户老用户</span>
				            </div>
				        </div>}/>
				    </Card>
		        </div>
		    </User>
		)
	}
}