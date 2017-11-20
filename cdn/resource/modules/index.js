

import React, {Component, cloneElement} from 'react'

import * as $utils from './utils'
import * as ReactRouter from 'react-router-dom'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as $store from './store'
import { observer } from 'mobx-react';
import PropTypes from 'prop-types'

const {BrowserRouter, Route, Switch, IndexRoute, HashRouter, matchPath} = ReactRouter
/**
* 初始化
* @param config:
*   enter => 进入
*/
export default async config => {
	config = config || {}
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
            const next = $utils.isFunction(config.enter) ? config.enter.bind(true, this.props) : this.props.history.push
			if(status){
				return isAuth ? null : next('/home')
			}
			if(isAuth){
				return next('/')
			}
		}
		async componentDidMount(){
			await this.isLogin()
		}
		render(){
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
						<Route path="/cardInfo" component={Pages.User.CardInfo} />
						<Route path="/resetPassword" component={Pages.User.ResetPassword} />
						<Route path="/history" component={Pages.User.History} />
						<Route path="/transactionDetails" component={Pages.User.TransactionDetails} />
						<Route path="/certification" component={Pages.User.Certification} />
						<Route path="/verification" component={Pages.User.Verification} />
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
				<Route path="" component={Fade} />
			)
		}
	}
	return Home
}
