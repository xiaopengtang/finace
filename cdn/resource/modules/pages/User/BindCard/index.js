import React, {Component} from 'react'
import User from '../../../layout/user'
import { NoticeBar, WingBlank, Card, WhiteSpace, Button, List, Icon, Checkbox, Steps, Flex, Accordion, InputItem} from 'antd-mobile'
const {Item} = List;

export default class Index extends Component {

	onChange = (key) => {
    console.log(key);
  }

	render () {
    const { getFieldProps } = this.props.form;
    console.log(1111);
    console.log(getFieldProps);
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

            <List renderHeader={() => 'Format'}>
            <InputItem
              {...getFieldProps('bankCard', {
                initialValue: '8888 8888 8888 8888',
              })}
              type="bankCard"
            >银行卡</InputItem>
            <InputItem
              {...getFieldProps('phone')}
              type="phone"
              placeholder="186 1234 1234"
            >手机号码</InputItem>
            <InputItem
              {...getFieldProps('password')}
              type="password"
              placeholder="****"
            >密码</InputItem>
            <InputItem
              {...getFieldProps('number')}
              type="number"
              placeholder="click to show number keyboard"
            >数字键盘</InputItem>
          </List>

					</div>
		    </User>
		 )
	}
}
