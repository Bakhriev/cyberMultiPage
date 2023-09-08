const path = require('path')
const config = {
	mode: 'production',
	entry: {
		development: './src/assets/js/development/development.js',
		main: './src/assets/js/main/main.js',
		// Другие точки входа...
	},
	output: {
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
}

module.exports = config
