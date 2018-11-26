/**
 * @Auther:  Paul Chou
 * @CreatedAt: 2018-11-22 22:24
 * @Project: webpack-blog
 * Since you created this file, you should make it perfect .
 */

const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
console.log(__dirname)

module.exports = {
	// 应用入口
	entry: {
		app: path.resolve(__dirname, '../src/main.js')
	},
	// 输出目录
	output: {
		filename: '[name].[hash].js', // name代表entry对应的名字；hash代表整个app打包完成后根据内容加上hash
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/public'
	},
	module: {
		rules: [
			{
				test: /.jsx$/,
				loader: 'babel-loader'
			},
			{
				test: /.(js)$/,
				loader: 'babel-loader',
				exclude: [
					path.join(__dirname, '../node_modules')
				]
			}
		]
	},
	plugins: [
		new HTMLPlugin()
	]
}

