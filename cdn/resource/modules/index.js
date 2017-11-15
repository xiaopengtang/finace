import 'babel-polyfill'
import 'antd-mobile/dist/antd-mobile.css'
import React, {Component, cloneElement} from 'react'
import style from '../style/index'
import * as $utils from './utils'
import * as ReactRouter from 'react-router-dom'
import Dom from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as $store from './store'
import { observer } from 'mobx-react';
import PropTypes from 'prop-types'

class Report extends Component{
	render(){
		const {children, m, ...other} = this.props
		return (
			<div {...other} dangerouslySetInnerHTML={{'__html': `<a m="${m}">${children}</a>`}}></div>
		)
	}
}
const {BrowserRouter, Route, Switch, IndexRoute, HashRouter} = ReactRouter
// window.G = window.G || {'isApp': false}
export default async data => {
	window.G = window.G || {'isApp': true}
	const Body = window.G.isApp ? HashRouter : BrowserRouter
	// console.log([Body, HashRouter, BrowserRouter, window.G])
	let Pages = await $utils.async_import(resolve => require.ensure([], require => resolve(require('./pages'))))
	@observer
	class Fade extends Component{
		async componentWillReceiveProps(nextProps){
			await this.isLogin()
		}
		async isLogin(){
			const status = await $store.auth.check()
			const {pathname} = this.props.location
			const isAuth = ['/','/register','/forgetPwd'].indexOf(pathname) === -1
			if(status){
				return isAuth ? null : this.props.history.push('/home')
			}
			if(isAuth){
				return this.props.history.push('/')
			}
		}
		async componentDidMount(){
			await this.isLogin()
		}
		render(){
			console.log(Pages.User.Recharge);
			return (
				<ReactCSSTransitionGroup
					transitionName="pager"
			        component="div"
			        className="container-wrap"
			        transitionAppear={true}
			        transitionLeave={false}>
				    <div className="container" key={this.props.location.pathname}>
				    	<Route path="/" exact component={Pages.Index} />
							<Route path="/register" component={Pages.Register} />
							<Route path="/forgetPwd" component={Pages.ForgetPwd} />
							<Route path="/home" component={Pages.User.Index} />
							<Route path="/list" component={Pages.User.Invest} />
							<Route path="/apply" component={Pages.User.Apply} />
							<Route path="/detail" component={Pages.User.OrderMain} />
            	<Route path="/user" component={Pages.User.UserDetail} />
            	<Route path="/setting" component={Pages.User.Setting} />
            	<Route path="/bindCard" component={Pages.User.BindCard} />
							<Route path="/recharge" component={Pages.User.Recharge} />
							<Route path="/withdrawals" component={Pages.User.Withdrawals} />
				    </div>
				</ReactCSSTransitionGroup>
			)
		}
	}
	class Home extends Component {
		static childContextTypes = {
			'$store': PropTypes.object.isRequired,
			'$utils': PropTypes.object.isRequired
		}
		getChildContext(){
			return {$store, $utils}
		}
		render () {
			return (
				<Body>
				    <Route path="" component={Fade} />
				</Body>
			)
		}
	}
	const body = document.querySelector('.wrap')
	// alert([Dom.render, body])
	Dom.render(<Home />, body)
}
