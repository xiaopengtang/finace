import React, {Component} from 'react'
import User from '../../../layout/user'
import { NoticeBar, WingBlank, Card, WhiteSpace, Button, List, Icon, Checkbox, Steps, Flex, Accordion} from 'antd-mobile'
const {Item} = List;

export default class Index extends Component {


	onChange = (key) => {
    console.log(key);
  }

	render () {
		return (
		    <User title="个人中心" module="userDetail" className="user-detail"
		    	footer={
						<div className="apply-footer">
							<Button type="warning">退出登录</Button>
		    		</div>
				}>
						<NoticeBar mode="closable">该信息将作为你的实名凭证，请确保真实</NoticeBar>

						<WingBlank>
							<div className="userInfo">
								<div className="J_Avatar">
									<img src="111" />
								</div>
								<div className="J_DetailInfo">
									<p className="userName">我是用户名</p>
									<p className="phoneNum">我是电话号码</p>
								</div>
								<i class="icon icon-chevron-right J_icon" aria-hidden="true"></i>
							</div>
						</WingBlank>

						<WingBlank>
							<Flex>
								<Flex.Item>
									<div className="J_priceWrapper">
										<p className="J_price">1234</p>
										<p>总资产(元)</p>
									</div>
								</Flex.Item>
								<Flex.Item>
									<div className="J_priceWrapper">
										<p className="J_price">1234</p>
										<p>可用余额(元)</p>
									</div>
								</Flex.Item>
								<Flex.Item>
									<div className="J_priceWrapper">
										<p className="J_price">1234</p>
										<p>投资金额(元)</p>
									</div>
								</Flex.Item>
							</Flex>
						</WingBlank>

						<WingBlank>
							<Flex>
								<Flex.Item>
									<div className="J_operation">
										<img src=""></img>
										<p>充值</p>
									</div>
								</Flex.Item>
								<Flex.Item>
									<div className="J_operation">
										<img src=""></img>
										<p>提现</p>
									</div>
								</Flex.Item>
								<Flex.Item>
									<div className="J_operation">
										<img src=""></img>
										<p>银行卡</p>
									</div>
								</Flex.Item>
							</Flex>
						</WingBlank>

						<div className="J_listWrapper">
						<Accordion accordion className="my-accordion" onChange={this.onChange}>
							<Accordion.Panel header="相关统计金额(元)">
								<List className="my-list">
									<Item extra={12345}>累计投标收益(元)</Item>
									<Item extra={12345}>累计投标收益(元)</Item>
									<Item extra={12345}>累计投标收益(元)</Item>
								</List>
							</Accordion.Panel>
						</Accordion>

						<List className="my-list">
							<Item>
								<div className="J_listItem">
									投资历史
									<i class="icon icon-chevron-right J_icon" aria-hidden="true"></i>
								</div>
							</Item>
						</List>

						<List className="my-list">
							<Item>
								<div className="J_listItem">
									资金明细
									<i class="icon icon-chevron-right J_icon" aria-hidden="true"></i>
								</div>
							</Item>
						</List>

						<List className="my-list">
							<Item>
								<div className="J_listItem">
									安全保障
									<i class="icon icon-chevron-right J_icon" aria-hidden="true"></i>
								</div>
							</Item>
						</List>

						<List className="my-list">
							<Item>
								<div className="J_listItem">
									优惠券
									<i class="icon icon-chevron-right J_icon" aria-hidden="true"></i>
								</div>
							</Item>
						</List>
						</div>
		    </User>
		 )
	}
}
