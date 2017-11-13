import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { NavBar, Icon } from 'antd-mobile'

export default class Index extends Component {
	state = {} ;
	static propTypes = {
		'title': PropTypes.string,
		'footer': PropTypes.node
	};

	static contextTypes = {
		'$store': PropTypes.object.isRequired,
		'$utils': PropTypes.object.isRequired
	};

	static defaultProps = {
		'module': 'home',
		'title': '首页',
		'footer': null
	}
	footerRender () {
		const modules = [
	    	{
	    		'url': '/home',
	    		'name': 'home',
	    		'icon': 'icon-home',
	    		'text': '首页'
	    	},
	    	{
	    		'url': '/list',
	    		'name': 'list',
	    		'icon': 'icon-line-chart',
	    		'text': '投资'
	    	},
	    	/*{
	    		'url': '/market',
	    		'name': 'market',
	    		'icon': 'icon-shopping-cart',
	    		'text': '商城'
	    	},*/
	    	{
	    		'url': '/user',
	    		'name': 'user',
	    		'icon': 'icon-user-circle',
	    		'text': '我'
	    	}
	    ]
		const tpl = (
			<div className="main-footer">
			    {this.props.footer ? this.props.footer : <ul>{modules.map((m, i) => {
			    	return (
			    		<li key={i} className={m.name === this.props.module ? 'active' : ''}>
			    		    <Link to={m.url}>
			    		    	<i className={`icon ${m.icon}`}></i>
			    		    	<h2>{m.text}</h2>
			    		    </Link>
			    		</li>
			    	)
			    })}</ul>}
			</div>
		)
		return tpl
	}

	render () {
		let {children, module, className, ...other} = this.props
		return (
			<div className="layout-user">
			    <div {...other} className={`main-contaiter ${className}`}>
			        <NavBar
				      leftContent={<Icon type="left" onClick={() => window.history.go(-1)} />}
				      rightContent={[
				        /*<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
				        <Icon key="1" type="ellipsis" />,*/
				      ]}
				    >{this.props.title}</NavBar>
			        {this.props.children}
			    </div>
			    {this.footerRender()}
			</div>
		);
	}
}