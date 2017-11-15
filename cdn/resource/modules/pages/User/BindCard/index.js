import React, {Component} from 'react'
import User from '../../../layout/user'
import { NoticeBar, WingBlank, Card, WhiteSpace, Button, List, Icon, Checkbox, Steps, Flex, Accordion, InputItem, Toast} from 'antd-mobile'
const {Item} = List;
const {Step} = Steps;

const customIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" className="am-icon am-icon-md">
    <g fillRule="evenodd" stroke="transparent" strokeWidth="4">
      <path d="M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z" />
      <path fill="#FFF" d="M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z" />
    </g>
  </svg>
);

const steps = [{
    title: '实名认证',
    description: 'This is description',
  }, {
    title: '绑定银行卡',
    description: 'This is description',
  }, {
    title: '人工验证',
    description: 'This is description',
  }].map((s, i) => <Step key={i} title={s.title} description={""} />);

export default class Index extends Component {

  constructor(props){
    super(props);
    this.changeInfo = this.changeInfo.bind(this);
  }

  state= {
    bankName: "",
    cardId: "",
    province: "",
    city: ""
  }

	checkInfo(){
    Toast.loading("请稍后", 2, (e)=>{
      window.location.href = "/verification"
    })
  }

  changeInfo(e, key){
    this.setState({
      [key]: e.target.value
    })
  }

	render () {
    let self = this;
		return (
		    <User title="绑定银行卡" module="userDetail" className="user-detail"
		    	footer={
            <div></div>
				  }
        >
          <div className="J_steps">
            <WingBlank mode={20} className="stepsExample">
              <WhiteSpace />
              <Steps current={1} direction="horizontal">{steps}</Steps>
              <WhiteSpace />
            </WingBlank>
          </div>

          <WingBlank>
            <List renderHeader={() => '请输入银行名:'} className="my-list">
              <Item>
                <input type="text" value={this.state.bankName} onChange={
                  (e)=>{
                    self.changeInfo(e, "bankName")
                  }
                }/>
              </Item>
            </List>
          </WingBlank>

          <WingBlank>
            <List renderHeader={() => '请输入银行卡号:'} className="my-list">
              <Item>
                <input type="number" value={this.state.cardId} onChange={
                  (e)=>{
                    self.changeInfo(e, "cardId")
                  }
                }/>
              </Item>
            </List>
          </WingBlank>

          <WingBlank>
            <List renderHeader={() => '请输入开户省份:'} className="my-list">
              <Item>
                <input type="text" value={this.state.province} onChange={
                  (e)=>{
                    self.changeInfo(e, "province")
                  }
                }/>
              </Item>
            </List>
          </WingBlank>

          <WingBlank>
            <List renderHeader={() => '请输入开户城市:'} className="my-list">
              <Item>
                <input type="text" value={this.state.city} onChange={
                  (e)=>{
                    self.changeInfo(e, "city")
                  }
                }/>
              </Item>
            </List>
          </WingBlank>

          <WingBlank>
            <div className="J_logout">
              <Button type="primary" onClick={
                this.checkInfo
              }>确认</Button>
            </div>
          </WingBlank>
		    </User>
		 )
	}
}
