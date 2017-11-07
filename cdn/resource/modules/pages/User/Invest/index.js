import User from '../../../layout/user'
import React, {Component} from 'react'
import { Tabs, WingBlank, Card, WhiteSpace, Button, List, Icon, Flex, Tag } from 'antd-mobile'

export default class Index extends Component {
	state = {
		'tabs': [
			{ title: '新手专享' },
			{ title: '精选理财' },
			{ title: '爆款推荐' },
			{ title: '猫咪宝' },
			{ title: '债权转让' }
		],
		'tabsSort': [{'title': '默认'},{'title': '利息'},{'title': '金额'},{'title': '期限'}]
	};
	renderTab (tab) {
		const {tabsSort} = this.state
		return (
			<div>
			    <WhiteSpace size="sm"/>
				<Card>
					<Card.Header 
					extra={<span data-txt="期限" className="invest-date">15天</span>}
					title="现代车质押借款"></Card.Header>
					<Card.Body>
						<Flex justify="between">
						    <Flex.Item className="invest-content">
						    	<div className="tags-list">
						    		<Tag small={true}>100起投</Tag>
						    		<Tag small={true}>100起投</Tag>
						    		<Tag small={true}>100起投</Tag>
						    	</div>
						    	<div className="invest-price">
						    	    <div className="show-price">8.08%</div>
						    	    <div className="show-price-sub">
						    	        <span>剩</span>
						    	        <span className="show-price-mony">10万</span>
						    	        <span>元</span>
						    	    </div>
						    	</div>
						    </Flex.Item>
						    <Flex.Item className="invest-present">测试</Flex.Item>
						</Flex>
					</Card.Body>
					<Card.Footer content="标编号：NJXED-201700000019"></Card.Footer>
				</Card>
			</div>
		)/*(
			<div>
				<Tabs tabs={tabsSort}>
				    <ul className="invest">
				       <li data-txt="爆款"></li>
				    </ul>
				</Tabs>
			</div>
		)*/
	}
	render () {
		const {tabs} = this.state
		return (
			<User className="user-invest" module="list" title="投资">
			    <Tabs tabs={tabs}>{this.renderTab.bind(this)}</Tabs>
			</User>
		)
	}
}