import User from '../../../layout/user'
import React, {Component} from 'react'
import { SegmentedControl, WingBlank, Card, WhiteSpace, Button, List, Icon, Flex, Tag} from 'antd-mobile'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default class Index extends Component {
	static contextTypes = {
		'$store': PropTypes.object.isRequired,
		'$utils': PropTypes.object.isRequired
	};
	state = {
		'list': []
	};
	// 
	async componentDidMount(){
		let list = await this.context.$store.api.user.index()
		list = Array.isArray(list) ? list : []
		this.setState({list})
	}
	renderList (){
		const {list} = this.state
		return (
			<ul style={{'listStyle': 'none'}}>
			   {list.map(it => (
			   	    <li>
			   	        <WhiteSpace size="sm"/>
					   	<Card>
					    	<Card.Header title={([,'新手专享','精选理财','爆款推荐'])[it.financialProduct.productType]}></Card.Header>
					    	<Card.Body className="index-list">
					    	    <Link to={{
					    	    	'pathname': '/detail',
					    	    	'search': `?id=${it.financialProduct.productCode}`
					    	    }}>
					    	    	<h2>{it.financialProduct.productName}</h2>
					    	    	<div className="tag-list">
					    	    	   {it.financialTagList.map(t => (<Tag small={true}>{t.name}</Tag>))}
					    	    	</div>
					    	    	<Flex align="center">
					    	    		<Flex.Item className="detail-list">
					    	    			<label>{it.financialProduct.availableAmount}元</label>
					    	    			<span>剩余金额</span>
					    	    		</Flex.Item>
					    	    		<Flex.Item className="detail-list">
					    	    		    <label className="red">{it.financialProduct.preYearRate}%</label>
					    	    			<span>年化收益</span>
					    	    		</Flex.Item>
					    	    		<Flex.Item className="detail-list">
					    	    		    <label>{it.financialProduct.deadline}{(['','天','周','月','年'])[it.financialProduct.deadlineUnit]}</label>
					    	    			<span>投资期限</span>
					    	    		</Flex.Item>
					    	    	</Flex>
					    	    </Link>
					    	    <Link 
					    	        to={{
										'pathname': '/list',
										'search': `?type=${it.financialProduct.productType}`
									}} 
					    	        className="list-more">查看更多</Link>
					    	</Card.Body>
					    </Card>
			   	    </li>
			   	))}
			</ul>
		)
	}
	render () {
		return (
			<User className="user-index">
			    <Card>
			        <Card.Body>
			        	<div className="yqhy">
							<table>
							    <tbody>
									<tr>
										<th>
											<img src="http://1989591.51vip.biz:7001/public/i/yaoqinghaoyouicon.png" style={{"width": "60px","height": "60px"}} />
										</th>
										<th>
											<img src="http://1989591.51vip.biz:7001/public/i/choujiangicon.png" style={{"width": "60px","height": "60px"}} />
										</th>
										<th>
											<img src="http://1989591.51vip.biz:7001/public/i/paihangbangicon.png" style={{"width": "60px","height": "60px"}} />
										</th>
									</tr>
									<tr>
										<td>
											邀请好友赚佣金
										</td>
										<td>
											积分抽奖乐不停
										</td>
										<td>
											投资达人排行榜
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="guide">
							<img src="http://1989591.51vip.biz:7001/public/i/guide.png" />
						</div>
						<div className="att">
							<i className="icon icon-bullhorn">&nbsp;&nbsp;投资有风险，入市需谨慎！</i>
						</div>
			        </Card.Body>
			    </Card>
			    {this.renderList()}
			    <WhiteSpace size="sm"/>
			</User>
		)
	}
}