import React, {Component} from 'react'
import User from '../../../layout/user'
import { NoticeBar, WingBlank, Card, WhiteSpace, Button, List, Icon, Checkbox, Steps, Flex, Accordion} from 'antd-mobile'
const {Item} = List;
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default class Index extends Component {

	static contextTypes = {
		'$store': PropTypes.object.isRequired,
		'$utils': PropTypes.object.isRequired
	};

	state = {
		'info': {}
	}
	async loginout(){
		const res = await this.context.$store.auth.loginout({});
		if(res.success){
			return this.props.history.push('/')
		}
	}

	async componentWillMount(){
		const info = await this.context.$store.api.user.userDetail({});
		if(!info){
			return
		}
		this.setState({info})
	}

	render () {
		let {
			addTime,
			birthday,
			email,
			emergencyContactName,
			emergencyContactPhone,
			emergencyContactRelation,
			id,
			idCheck,
			idNo,
			idType,
			lastLoginTime,
			level,
			name,
			optTime,
			phone,
			qq,
			recommender,
			sex,
			status,
			userCode,
			userId,
			weibo,
			weixin,
		} = this.state.info;
		return (
		    <User title="个人中心" module="user" className="user-detail">
						<NoticeBar mode="closable">该信息将作为你的实名凭证，请确保真实</NoticeBar>

						<WingBlank>
							<div className="userInfo">
								<Link to="/setting">
									<div className="J_Avatar">
										<img src="http://1989591.51vip.biz:7001/public/i/user_defualt.png" />
									</div>
									<div className="J_DetailInfo">
										<p className="userName">{!!name? name: userCode }</p>
										<p className="phoneNum">{phone}</p>
									</div>
									<i class="icon icon-chevron-right J_icon" aria-hidden="true"></i>
								</Link>
							</div>
						</WingBlank>

						<WingBlank>
							<Flex>
								<Flex.Item>
									<div className="J_priceWrapper">
										<p className="J_price">0</p>
										<p>总资产(元)</p>
									</div>
								</Flex.Item>
								<Flex.Item>
									<div className="J_priceWrapper">
										<p className="J_price">0</p>
										<p>可用余额(元)</p>
									</div>
								</Flex.Item>
								<Flex.Item>
									<div className="J_priceWrapper">
										<p className="J_price">0</p>
										<p>投资金额(元)</p>
									</div>
								</Flex.Item>
							</Flex>
						</WingBlank>

						<WingBlank>
							<Flex>
								<Flex.Item>
									<Link to="/recharge">
										<div className="J_operation">
											<img src="http://1989591.51vip.biz:7001/public/i/recharge_defualt.png"></img>
											<p>充值</p>
										</div>
									</Link>
								</Flex.Item>
								<Flex.Item>
									<Link to="/withdrawals">
										<div className="J_operation">
											<img src="http://1989591.51vip.biz:7001/public/i/withdrawals_defualt.png"></img>
											<p>提现</p>
										</div>
									</Link>
								</Flex.Item>
								<Flex.Item>
									<Link to="/cardInfo">
									<div className="J_operation">
										<img src="http://1989591.51vip.biz:7001/public/i/card_defualt.png"></img>
										<p>银行卡</p>
									</div>
									</Link>
								</Flex.Item>
							</Flex>
						</WingBlank>

						<div className="J_listWrapper">
						<Accordion accordion className="my-accordion" onChange={this.onChange}>
							<Accordion.Panel header="相关统计金额(元)">
								<List className="my-list">
									<Item extra={0}>累计投标收益(元)</Item>
									<Item extra={0}>累计投标收益(元)</Item>
									<Item extra={0}>累计投标收益(元)</Item>
								</List>
							</Accordion.Panel>
						</Accordion>

						<Link to="/history">
							<List className="my-list">
								<Item>
									<div className="J_listItem">
										投资历史
										<i class="icon icon-chevron-right J_icon" aria-hidden="true"></i>
									</div>
								</Item>
							</List>
						</Link>

						<Link to="/transactionDetails">
							<List className="my-list">
								<Item>
									<div className="J_listItem">
										资金明细
										<i class="icon icon-chevron-right J_icon" aria-hidden="true"></i>
									</div>
								</Item>
							</List>
						</Link>

						<WingBlank>
							<div className="J_logout">
								<Button type="warning" onClick={(e)=>{
									this.loginout();
								}}>退出登录</Button>
							</div>
						</WingBlank>
					</div>
		    </User>
		 )
	}
}
