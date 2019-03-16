require("@babel/polyfill");

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const publicPath = path.join(path.resolve('../privatir-api'), 'public');
const appPath = path.resolve(__dirname, 'app');

module.exports = {
  mode: "development",
  entry: {
    app: ["@babel/polyfill", "./app/index.js"]
  },
  output: {
    path: publicPath,
    filename: "js/app.js"
  },
  module: {
    rules: [
      { test: /\.m?js$/, use: { loader: 'babel-loader' }, exclude: /(node_modules|bower_components)/, include: appPath },
      { test: /\.(sa|sc|c)ss$/, use: ['style-loader', 'css-loader', 'sass-loader'], include: appPath }
    ]
  },
  devServer: {
    publicPath: path.join(publicPath),
    contentBase: path.join(publicPath),
    compress: true
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "app.css" }),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      filename: `html/index.html`,
      // Optional for aforementioned
      appMountId: 'root',
    })

  ]
}