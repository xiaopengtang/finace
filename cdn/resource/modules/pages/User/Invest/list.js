import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import { Tabs, WingBlank, Card, WhiteSpace, Button, List, Icon, Flex, Tag } from 'antd-mobile'
import PropTypes from 'prop-types'

export default class Index extends Component{
	static defaultProps = {
		'type': 1
	};
	static propTypes = {
		'type': PropTypes.string
	};
	state = {
		'data': []
	};
	static contextTypes = {
		'$store': PropTypes.object.isRequired,
		'$utils': PropTypes.object.isRequired
	};
	async componentWillMount(){
		const productType = this.props.type
		const data = await this.context.$store.api.user.queryList({'page': 1, productType})
		this.setState({data})
	}
	renderChild(data){
		// console.log(info)
		const info = data.financialProduct
		const tagList = data.financialTagList
		return (
			<li>
				<WhiteSpace size="sm"/>
			    <Link to={{
			    	'pathname': '/detail',
			    	'search': `?id=${info.productCode}`
			    }} style={{'display': 'block'}}>
					<Card>
						<Card.Header 
						extra={<span data-txt="期限" className="invest-date">{info.deadline}{([
							,'天','周','月','年'
						])[info.deadlineUnit]}</span>}
						title={info.productName}></Card.Header>
						<Card.Body>
							<Flex justify="between">
							    <Flex.Item className="invest-content">
							    	<div className="tags-list">{
							    		tagList.map(t => <Tag small={true}>{t.name}</Tag>)
							    	}</div>
							    	<div className="invest-price">
							    	    <div className="show-price">{info.preYearRate}%</div>
							    	    <div className="show-price-sub">
							    	        <span>剩</span>
							    	        <span className="show-price-mony">{info.availableAmount}</span>
							    	        <span>元</span>
							    	    </div>
							    	</div>
							    </Flex.Item>
							    <Flex.Item className="invest-present">{(((info.totalAmount - info.availableAmount)/info.totalAmount)*100).toFixed(2)}%</Flex.Item>
							</Flex>
						</Card.Body>
						<Card.Footer content={`标编号：${info.productCode}`}></Card.Footer>
					</Card>
				</Link>
			</li>
		)
	}
	render (){
		return (
			<ul style={{'listStyle': 'none'}}>{this.state.data.map(d => this.renderChild(d))}</ul>
		)
	}
}