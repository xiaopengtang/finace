import 'babel-polyfill'
import 'antd-mobile/dist/antd-mobile.css'
import React, {Component} from 'react'
import style from '../style/index'
import * as utils from './utils'
import * as ReactRouter from 'react-router-dom'
import Dom from 'react-dom'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
console.log(ReactRouter);
const {BrowserRouter, Route, Switch, IndexRoute, HashRouter} = ReactRouter
export default async data => {
	let Pages = await utils.async_import(resolve => require.ensure([], require => resolve(require('./pages'))));
	console.log(Pages.User.Setting);
	class Home extends Component {
		render () {
			return (
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Pages.Index} />
						<Route path="/register" component={Pages.Register} />
						<Route path="/forgetPwd" component={Pages.ForgetPwd} />
						<Route path="/home" component={Pages.User.Index} />
						<Route path="/list" component={Pages.User.List} />
						<Route path="/detail" component={Pages.User.Detail} />
						<Route path="/invest" component={Pages.User.Invest} />
						<Route path="/apply" component={Pages.User.Apply} />
						<Route path="/user" component={Pages.User.UserDetail} />
						<Route path="/setting" component={Pages.User.Setting} />
						<Route path="/bindCard" component={Pages.User.BindCard} />
					</Switch>
				</BrowserRouter>
			)
		}
	}
	const body = document.querySelector('.wrap')
	// alert([Dom.render, body])
	Dom.render(<Home />, body)
}
