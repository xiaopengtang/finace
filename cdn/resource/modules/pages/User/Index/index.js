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
	async componentWillMount(){
		let list = await this.context.$store.api.user.index()
		list = Array.isArray(list) ? list : []
		this.setState({list})
	}
	renderList (){
		const {list} = this.state
		return (
			<ul style={{'listStyle': 'none'}}>
			   {list.map(it => (
			   	    <li className="hot-list">
			   	        <WhiteSpace size="sm"/>
					   	{/*<Card>
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
					    </Card>*/}
					    <Card full>
					        <Card.Header 
					            title={it.financialProduct.productName}></Card.Header>
					        <Card.Body>
					            <ul className="list-content">
					                <li>
					                	<div className="price-mony">{it.financialProduct.availableAmount}元</div>
					                	<div className="price-sub">剩余金额</div>
					                </li>
					                <li className="main-price">
					                	<div className="info">
					                	    <span>年利率</span><span className="font-green">{it.financialProduct.preYearRate}%</span>
					                	</div>
					                	<div className="info">投资期限{it.financialProduct.deadline}{(['','天','周','月','年'])[it.financialProduct.deadlineUnit]}</div>
					                </li>
					                <li>
					                    <Link to={{
					                    	'pathname': '/detail',
					    	    	        'search': `?id=${it.financialProduct.productCode}`
					                    }}>
					                    	<div className="label">立即投资</div>
					                    </Link>
					                </li>
					            </ul>
					        </Card.Body>
					        <Card.Footer content={<div className="price-btm">
					            <div className="label-tag">
					                <span className={`label ${([,'red', 'green', 'yellow'])[it.financialProduct.productType]}`}>{([,'新手专享','精选理财','爆款推荐'])[it.financialProduct.productType]}</span>
					                <span>{it.financialTagList.map(t => t.name + '  ')}</span>
					            </div>
					        </div>}/>
					        <Link 
				    	        to={{
									'pathname': '/list',
									'search': `?type=${it.financialProduct.productType}`
								}} 
				    	        className="list-more">查看更多</Link>
					    </Card>
			   	    </li>
			   	))}
			</ul>
		)
	}
	render () {
		return (
			<User className="home-list user-index">
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