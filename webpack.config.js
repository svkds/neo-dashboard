var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var APP_DIR = path.resolve(__dirname, 'src/client');
var BUILD_DIR = path.resolve(__dirname, 'dist/client');

var config = {
	entry: APP_DIR + '/index.js',  
	output: {
		path: BUILD_DIR,
		filename: 'app.bundle.js'
	},  
	devServer: {
		inline: true,
		port: 9000
	},
	module: {
		loaders: [
			{ 
				test: /(.jsx|.js)?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: { 
					presets: ['es2015', 'react']
				} 
			},
			{ 
				test: /\.css$/,
				exclude: /node_modules/, 
				loader: 'style-loader!css-loader'
			},
			
			{test : /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)(\?[\s\S]+)?$/,
        loader : 'url-loader',
        exclude : /node_modules/
			}
	]
	}
};

module.exports = config;