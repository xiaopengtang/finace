// 密码重置
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

    oldPass: "",
    oldPassHideText: "",
    newPass: "",
    newPassHideText: "",
    newPassCheck: "",
    newPassCheckHideText: "",
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

  changeInfo(e, key){
    let length = e.target.value.length;
    let hideText = "";
    for(var i=0; i<length; i++){
      hideText+= "*";
    };
    this.setState({
      [key]: e.target.value,
      [key+"HideText"]: hideText
    })
  }

	render () {
    let self = this;
		return (
		    <User title="重置密码" module="userDetail" className="user-detail"
		    	footer={
            <div></div>
				  }
        >
          <WingBlank>
            <List renderHeader={() => '请输入旧密码:'} className="my-list">
              <Item>
                <input className="J_input" type="text" value={this.state.oldPassHideText}
                  onChange={
                    (e)=>{
                      self.changeInfo(e, "oldPass");
                    }
                }/>
              </Item>
            </List>
          </WingBlank>

          <WingBlank>
            <List renderHeader={() => '请输入新密码:'} className="my-list">
              <Item>
                <input className="J_input" type="text" value={this.state.newPassHideText} onChange={
                  (e)=>{
                    self.changeInfo(e, "newPass");
                  }
                }/>
              </Item>
            </List>
          </WingBlank>

          <WingBlank>
            <List renderHeader={() => '请重新输入新密码:'} className="my-list">
              <Item>
                <input className="J_input" type="text" value={this.state.newPassCheckHideText} onChange={(e)=>{
                    self.changeInfo(e, "newPassCheck");
                  }
                }/>
              </Item>
            </List>
          </WingBlank>

          <WingBlank>
            <div className="J_logout">
              <Button type="primary" onClick={this.determine}>确认</Button>
            </div>
          </WingBlank>
		    </User>
		 )
	}
}
