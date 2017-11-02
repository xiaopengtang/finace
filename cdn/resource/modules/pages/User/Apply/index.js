import React, {Component} from 'react'
import User from '../../../layout/user'
import { NoticeBar, WingBlank, Card, WhiteSpace, Button, List, Icon, Checkbox, Steps} from 'antd-mobile'


export default class Index extends Component {
	render () {
		return (
		    <User title="完善申请信息" module="list" className="user-apply" 
		    footer={<div className="apply-footer">
		        <Checkbox.AgreeItem ><a className="apply-footer-notice">我已阅读并同意《贷款申请书》</a></Checkbox.AgreeItem>
		        <div className="apply-footer-btm">提交</div>
		    </div>}>
		        <NoticeBar 
		        mode="closable">该信息将作为你的实名凭证，请确保真实</NoticeBar>
			    <Card>
			    	<Card.Body>
			    		<Steps size="small" current={1}>
					        <Steps.Step title="Finished" description="This is description" />
					        <Steps.Step title="In Progress" description="This is description" />
					        <Steps.Step title="Waiting" description="This is description" />
					    </Steps>
			    	</Card.Body>
			    </Card>
		    </User>
		 )
	}
}