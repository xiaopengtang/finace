import React, {Component} from 'react'
import User from '../../../layout/user'
import { SegmentedControl, WingBlank, Card, WhiteSpace, Button } from 'antd-mobile'

export default class Index extends Component {
	render () {
		return (
		    <User module="list" className="home-list">
		        <div style={{'backgroundColor': '#FFF', 'padding': '10px 0'}}>
		        	<WingBlank>
			        	<SegmentedControl values={['极速贷', '银行贷']}/>
			        </WingBlank>
		        </div>
		        <div className="price-info">
		           <div className="price-title">贷款额度<i>0</i>元</div>
		           <Button icon={<i className="icon icon-line-chart"></i>}>提升额度</Button>
		        </div>
		        <Card full>
			        <Card.Header>工行乐信贷</Card.Header>
			        <Card.Body>
			            <div>This is content of `Card`</div>
			        </Card.Body>
			        <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
			    </Card>
		    </User>
		)
	}
}