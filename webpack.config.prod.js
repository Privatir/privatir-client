require("@babel/polyfill");

const path = require('path');
const webpack = require('webpack');
const publicPath = path.join(process.cwd(), '..', 'public');
const appPath = path.resolve(__dirname, 'app');

module.exports = {
  mode: "production",
  entry: {
    app: ['@babel-polyfill', './app/index.js']
  },
  output: {
    path: path.join(publicPath, 'js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.m?js$/, use: { loader: 'babel-loader' }, exclude: /(node_modules|bower_components)/, include: appPath },
      { test: /\.scss$/, use: ["css-loader", "sass-loader"] }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new webpack.DefinePlugin({ __DEVTOOLS__: false }),
    new webpack.NoErrorsPlugin(),
  ]
}