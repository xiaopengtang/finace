import React, {Component} from 'react'
import User from '../../../layout/user'
import { SegmentedControl, WingBlank } from 'antd-mobile'

export default class Index extends Component {
	render () {
		return (
		    <User module="list">
		        <WingBlank>
		        	<SegmentedControl values={['极速贷', '银行贷']}/>
		        </WingBlank>
		    </User>
		)
	}
}