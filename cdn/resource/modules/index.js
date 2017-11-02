import 'babel-polyfill'
import 'antd-mobile/dist/antd-mobile.css'
import React, {Component} from 'react'
import style from '../style/index'
import * as utils from './utils'
import {BrowserRouter, Route} from 'react-router-dom'
import Dom from 'react-dom' 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default async data => {
	let Pages = await utils.async_import(resolve => require.ensure([], require => resolve(require('./pages'))))
	class Home extends Component {
		render () {
			return ( 
				<BrowserRouter
				    forceRefresh={false}>
					<div className="pages-content">
						<Route exact path="/" component={Pages.Index} />
						<Route path="/register" component={Pages.Register} />
						<Route path="/forgetPwd" component={Pages.ForgetPwd} />
						<Route path="/home" component={Pages.User.Index} />
						<Route path="/list" component={Pages.User.List} />
						<Route path="/detail" component={Pages.User.Detail} />
						<Route path="/apply" component={Pages.User.Apply} />
					</div>
				</BrowserRouter>
			)
		}
	}
	const body = document.querySelector('.wrap')
	Dom.render(<Home />, body)
}