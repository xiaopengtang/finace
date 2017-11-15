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
		    <User title="个人设置" module="userDetail" className="user-detail"
		    	footer={
            <div></div>
				  }
        >
					<div className="">
						<List className="my-list">
							<Item extra={
                  <div>
                    <span>{"aaaaaaaaaa" + " "}</span>
                    <i class="icon icon-chevron-right J_icon" aria-hidden="true"></i>
                  </div>
                }>
								<div className="J_listItem">
									用户名
								</div>
							</Item>
						</List>

						<List className="my-list">
							<Item
                extra={
                  <div>
                    <span>{"暂不支持认证" + " "}</span>
                    <i class="icon icon-chevron-right J_icon" aria-hidden="true"></i>
                  </div>
                }
              >
								<div className="J_listItem">
								  个人信息
								</div>
							</Item>
						</List>

						<List className="my-list">
							<Item
                extra={
                  <div>
                    <span>{"个人账户"}</span>
                  </div>
                }
              >
								<div className="J_listItem">
									账户类型
								</div>
							</Item>
						</List>

						<List className="my-list">
							<Item
                extra={
                  <div>
                    <span>{"13770673044"}</span>
                  </div>
                }
              >
								<div className="J_listItem">
									手机
								</div>
							</Item>
						</List>

            <List className="my-list">
              <Item
                extra={
                  <div>
                    <i class="icon icon-chevron-right J_icon" aria-hidden="true"></i>
                  </div>
                }
              >
                <div className="J_listItem">
                  银行卡
                </div>
              </Item>
            </List>

            <List className="my-list">
              <Item
                extra={
                  <div>
                    <i class="icon icon-chevron-right J_icon" aria-hidden="true"></i>
                  </div>
                }
              >
                <div className="J_listItem">
                  更换密码
                </div>
              </Item>
            </List>
					</div>
		    </User>
		 )
	}
}
