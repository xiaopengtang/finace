export const async_import = cb => new Promise(resolve => cb(source => {
	const aim = '__esModule' in source && source.__esModule && source.default || source
    resolve(aim)
}))