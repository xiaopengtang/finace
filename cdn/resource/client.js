import 'babel-polyfill'
import render from './modules'
import 'antd-mobile/dist/antd-mobile.css'
import style from './style/index'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import React from 'react'
import Dom from 'react-dom'

const client = async() => {
	const Component = await render()
	const body = document.querySelector('.wrap')
	Dom.render((
		<BrowserRouter>
		    <Component />
		</BrowserRouter>
	), body)
}

client().then(() => console.log('初始化完成...'))
