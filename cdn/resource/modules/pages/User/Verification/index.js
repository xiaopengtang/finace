// 人工验证
import React, {Component} from 'react'
import User from '../../../layout/user'
import { NoticeBar, WingBlank, Card, WhiteSpace, Button, List, Icon, Checkbox, Steps, Flex, Accordion, InputItem, Picke, Toast} from 'antd-mobile'
const {Item} = List;
const {Step} = Steps;

const history = []

export default class Index extends Component {

  constructor(props){
    super(props);
    this.toHome = this.toHome.bind(this);
  }

  state = {
    history: [],
  };

  toHome(){
    // window.location.href = "/user"
    this.props.history.push('/user')
  }

	render () {
		return (
		    <User title="验证中" module="userDetail" className="user-detail"
		    	footer={
            <div></div>
				  }
        >
          <WingBlank>
            {
              history.length > 0
              ? history.map((item)=>{
                  return (
                    <div className="J_historyItem">
                      <Card>
                        <Card.Body>
                          <div>This is content of `Card`</div>
                          </Card.Body>
                      </Card>
                    </div>
                  )
                })
              : <div className="J_historyItem">
                  <Card>
                    <Card.Body>
                      <div className="J_msgText">正在为您审核~</div>
                    </Card.Body>
                  </Card>
                </div>
            }
          </WingBlank>
          <WingBlank>
            <div className="J_logout">
              <Button type="primary" onClick={
                this.toHome
              }>返回</Button>
            </div>
          </WingBlank>

		    </User>
		 )
	}
}
