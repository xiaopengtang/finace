// 提现
import React, {Component} from 'react'
import User from '../../../layout/user'
import { NoticeBar, WingBlank, Card, WhiteSpace, Button, List, Icon, Checkbox, Steps, Flex, Accordion, InputItem, Picke, Toast} from 'antd-mobile'
const {Item} = List;
const {Step} = Steps;

export default class Index extends Component {

  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  state = {
    value: 0,
  };

  onChange(e){
    this.setState({
      value: e.target.value
    })
  }

  // 确认按钮统一甩锅 @丹君
  determine(){
    console.log(1111);
    Toast.loading("请稍后", 2, (e)=>{
      Toast.offline('服务器端网络异常!!!', 1);
    })
  }

	render () {
		return (
		    <User title="提现" module="userDetail" className="user-detail"
		    	footer={
            <div></div>
				  }
        >
          <div>
            <List renderHeader={() => '请输入提现金额:'} className="my-list">
              <Item>
                <input className="J_input" type="number" value={this.state.value} onChange={this.onChange}/>
              </Item>
            </List>
          </div>

          <WingBlank>
            <div className="J_logout">
              <Button type="primary" onClick={this.determine}>确认</Button>
            </div>
          </WingBlank>
		    </User>
		 )
	}
}
