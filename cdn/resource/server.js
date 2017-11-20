import render from './modules'
import {matchPath, StaticRouter} from 'react-router-dom'
import {renderToString} from 'react-dom/server'
import React from 'react'

export default async(url) => {
	const Component = await render()
	const context = {}
	return renderToString(
		<StaticRouter context={context} location={url}>
		    <Component />
		</StaticRouter>
	)
}