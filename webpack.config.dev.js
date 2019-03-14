require("@babel/polyfill");

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = path.join(process.cwd(), '..', 'public');
const appPath = path.resolve(__dirname, 'app');

module.exports = {
  mode: "development",
  entry: {
    app: ["@babel/polyfill", "./app/index.js"]
  },
  output: {
    path: path.join(publicPath, 'js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.m?js$/, use: { loader: 'babel-loader' }, exclude: /(node_modules|bower_components)/, include: appPath },
      { test: /\.(sa|sc|c)ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 
      __DEVTOOLS__: true 
    }),
    new MiniCssExtractPlugin({
      filename: "app.css",
    }),
    new HtmlWebpackPlugin({
      title: 'Privatir',
      filename: path.join(publicPath, 'index.html')
    })
  ]
}