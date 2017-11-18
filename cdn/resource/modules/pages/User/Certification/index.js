import React, {Component} from 'react'
import User from '../../../layout/user'
import { NoticeBar, WingBlank, Card, WhiteSpace, Button, List, Icon, Checkbox, Steps, Flex, Accordion, InputItem, Picker, Toast} from 'antd-mobile'
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

const seasons = [
  {
    label: '男',
    value: 1,
  },
  {
    label: '女',
    value: 0,
  },
];

//
// <Picker
//   data={seasons}
//   cols={this.state.cols}
//   value={this.state.asyncValue}
//   onChange={v => this.setState({ sValue: v }, x=>console.log(this.state))}
//   onOk={v => console.log(v)}
//   title="选择性别"
// >
//   <List.Item arrow="horizontal" onClick={this.onClick}>性别</List.Item>
// </Picker>
export default class Index extends Component {

  constructor(props){
    super(props);
    this.checkInfo = this.checkInfo.bind(this);
  }

  state = {
    data: [],
    cols: 1,
    pickerValue: [],
    asyncValue: [],
    sValue: ['男', 1],
    visible: false,

    name: "",
    idNum: ""
  };

  onChange = (value) => {
    console.log(value);
    this.setState({
      value,
    });
  }

  onScrollChange = (value) => {
    console.log(value);
  }

  changeInfo(e, key){
    this.setState({
      [key]: e.target.value
    })
  }

  checkInfo(){

    let self = this;
    console.log(self.state);
    let msg = false;
    self.state.name == ""
      ? msg = "姓名不可以为空"
      : false;
    self.state.idNum == ""
      ? msg = "身份证号不可以为空"
      : false;

    if (msg) {
      Toast.fail(msg, 1);
    } else {
      Toast.loading("请稍后", 2, (e)=>{
        self.props.history.push("/bindCard")
      })
    }

  }

	render () {
    let self = this;
		return (
		    <User title="实名认证" module="userDetail" className="user-detail"
		    	footer={
            <div></div>
				  }
        >
          <div className="J_steps">
            <WingBlank mode={20} className="stepsExample">
              <WhiteSpace />
              <Steps current={0} direction="horizontal">{steps}</Steps>
              <WhiteSpace />
            </WingBlank>
          </div>

          <div>
            <List renderHeader={() => '姓名'} className="my-list">
              <Item>
                <input className="J_input" type="text" value={this.state.name} onChange={
                  (e)=>{
                    self.changeInfo(e, "name")
                  }
                }/>
              </Item>
            </List>
          </div>

          <div>
            <List renderHeader={() => '身份证号'} className="my-list">
              <Item>
                <input className="J_input" type="number" value={this.state.idNum} onChange={
                  (e)=>{
                    self.changeInfo(e, "idNum")
                  }
                }/>
              </Item>
            </List>
          </div>

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
