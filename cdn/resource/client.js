import 'babel-polyfill'
import render from './modules'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import React from 'react'
import Dom from 'react-dom'
// import Eruda from 'eruda'

// Eruda.init()

// console.log({Router})

const client = async() => {
	let G = typeof window !== 'undefined' ? window.G : {'isApp': false}
	G = G || {'isApp': true}
	const Body = G.isApp ? HashRouter : BrowserRouter
	const Component = await render()
	const body = document.querySelector('.wrap')
	Dom.render((
		<Body>
		    <Component />
		</Body>
	), body)
}

client().then(() => console.log('初始化完成...'))
