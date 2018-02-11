

var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin'); // 添加在这里
module.exports = {
	entry: './index.js',
	output: {
		filename: './bundle.js',
	},
	module: {
	    loaders: [
	        {
	            test: /\.css$/,
	            loader: 'style-loader!css-loader'
	        }
	    ]
	},
	plugins: [new HtmlWebpackPlugin({								 
		template: path.resolve(__dirname, './index.html'),
		filename: 'index.html',
		inject: 'html'
	})]
};

