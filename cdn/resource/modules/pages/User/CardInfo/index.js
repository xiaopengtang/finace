// 银行卡信息
import React, {Component} from 'react'
import User from '../../../layout/user'
import {Link} from 'react-router-dom'
import { NoticeBar, WingBlank, Card, WhiteSpace, Button, List, Icon, Checkbox, Steps, Flex, Accordion, InputItem, Picke, Toast} from 'antd-mobile'
const {Item} = List;
const {Step} = Steps;

export default class Index extends Component {

  constructor(props){
    super(props);
  }

	render () {
		return (
		    <User title="银行卡信息" module="userDetail" className="user-detail"
		    	footer={
            <div></div>
				  }
        >
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
            <Card>
              <Card.Body>
                <div className="J_msgText">暂未发现已绑定的银行卡~~~</div>
              </Card.Body>
            </Card>
            <WhiteSpace size="lg" />
          </WingBlank>
          <WingBlank>
            <div className="J_logout">
              <Link to="/certification">
                <Button type="primary">去绑定银行卡</Button>
              </Link>
            </div>
          </WingBlank>
		    </User>
		 )
	}
}
