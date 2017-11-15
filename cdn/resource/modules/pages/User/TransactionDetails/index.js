// 资金明细
import React, {Component} from 'react'
import User from '../../../layout/user'
import { NoticeBar, WingBlank, Card, WhiteSpace, Button, List, Icon, Checkbox, Steps, Flex, Accordion, InputItem, Picke, Toast} from 'antd-mobile'
const {Item} = List;
const {Step} = Steps;

const history = []

export default class Index extends Component {

  constructor(props){
    super(props);
  }

  state = {
    history: [],
  };

	render () {
		return (
		    <User title="资金明细" module="userDetail" className="user-detail"
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
                      <div className="J_msgText">暂时没有任何资金记录!!!</div>
                    </Card.Body>
                  </Card>
                </div>
            }
          </WingBlank>

		    </User>
		 )
	}
}
