import User from '../../../layout/user'
import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import { Tabs, WingBlank, Card, WhiteSpace, Button, List, Icon, Flex, Tag } from 'antd-mobile'
import PropTypes from 'prop-types'
import ProductList from './list'

export default class Index extends Component {
	static contextTypes = {
		'$store': PropTypes.object.isRequired,
		'$utils': PropTypes.object.isRequired
	};
	state = {
		'tabs': [
			{ title: '新手专享','list': [], 'productType': 1 },
			{ title: '精选理财','list': [], 'productType': 2 },
			{ title: '爆款推荐','list': [], 'productType': 3 },
			// { title: '猫咪宝' },
			// { title: '债权转让' }
		],
		'tabsSort': [{'title': '默认'},{'title': '利息'},{'title': '金额'},{'title': '期限'}]
	};
	renderTab (tab) {
		const {tabsSort} = this.state
		return (
			<ProductList type={tab.productType} />
		)
	}
	render () {
		const {tabs} = this.state
		let page = this.context.$utils.queryString('type', this.props.location.search)
		page = parseInt(page)
		page = isNaN(page) ? 0 : page - 1
		return (
			<User className="user-invest" module="list" title="投资">
			    <Tabs tabs={tabs} initialPage={page}>{this.renderTab.bind(this)}</Tabs>
			    <WhiteSpace size="sm"/>
			</User>
		)
	}
}