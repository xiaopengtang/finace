import User from '../../../layout/user'
import React, {Component} from 'react'
import { SegmentedControl, WingBlank, Card, WhiteSpace, Button, List, Icon} from 'antd-mobile'

export default class Index extends Component {
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
				
				<WhiteSpace size="sm"/>
				<Card>
					<Card.Body>
						<div className="xszxBox">
							<div className="xszx">
								<p>新手专享
									<b>新手注册送888体验金</b>
								</p>
							</div>
								<p className="content_detail_title">
									奔腾车抵押借款
									<span>100起投</span>
									<span>限投1次</span>
								</p>
								<table border="0">
									<tbody><tr>
										<th style={{"fontWeight": "normal"}}><span style={{"fontSize": "20px"}}>8000.00</span>元</th>
										<th style={{"fontWeight": "normal"}}><span style={{"fontSize": "20px", "color": "#F54749"}}>14.00</span>%</th>
										<th style={{"fontWeight": "normal"}}><span style={{"fontSize": "20px"}}>1</span>
											月
											</th>
									</tr>
									<tr>
										<td>剩余金额</td>
										<td>年化收益</td>
										<td>投资期限</td>
									</tr>
								</tbody></table>
							<p className="forMore">查看更多</p>
						</div>
					</Card.Body>
				</Card>
			</User>
		)
	}
}