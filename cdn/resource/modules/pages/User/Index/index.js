import User from '../../../layout/user'
import React, {Component} from 'react'
import { SegmentedControl, WingBlank, Card, WhiteSpace, Button, List, Icon} from 'antd-mobile'
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
							<Card.Body>
								<div className="xszxBox">
									<div className="xszx">
										<p>{([,'新手专享','精选理财','爆款推荐'])[it.financialProduct.productType]}
											{/*<b>新手注册送888体验金</b>*/}
										</p>
									</div>
										<p className="content_detail_title">
											{it.financialProduct.productName}
											{it.financialTagList.map(t => (<span>{t.name}</span>))}
											
										</p>
										<table border="0">
											<tbody><tr>
												<th style={{"fontWeight": "normal"}}><span style={{"fontSize": "20px"}}>{it.financialProduct.availableAmount}</span>元</th>
												<th style={{"fontWeight": "normal"}}><span style={{"fontSize": "20px", "color": "#F54749"}}>{it.financialProduct.preYearRate}</span>%</th>
												<th style={{"fontWeight": "normal"}}><span style={{"fontSize": "20px"}}>{it.financialProduct.deadline}</span>
													{(['','天','周','月','年'])[it.financialProduct.deadlineUnit]}
													</th>
											</tr>
											<tr>
												<td>剩余金额</td>
												<td>年化收益</td>
												<td>投资期限</td>
											</tr>
										</tbody></table>
									<Link 
									    style={{'marginLeft': '0','border': 'none', 'backgroundColor': 'inherit','color': '#4180e9', 'width': '100%'}}
										to={{
											'pathname': '/list',
											'search': `?type=${it.financialProduct.productType}`
										}} 
										className="forMore">查看更多</Link>
								</div>
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