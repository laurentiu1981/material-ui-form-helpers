const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = (env, args) => merge(config, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
  },
	plugins: [
		new CompressionPlugin()
	]
});