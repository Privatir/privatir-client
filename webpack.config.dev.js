require("@babel/polyfill");

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const publicPath = path.join(path.resolve('../privatir-api'), 'public/');
const appPath = path.resolve(__dirname, 'app');


module.exports = {
  mode: "development",
  entry: {
    app: ["@babel/polyfill", "./app/index.js"]
  },
  output: {
    path: __dirname + '/dist',
    filename: "app.js"
  },
  module: {
    rules: [
      { test: /\.m?js$/, use: { loader: 'babel-loader' }, exclude: /(node_modules|bower_components)/, include: appPath },
      { test: /\.(sa|sc|c)ss$/, use: ['style-loader', 'css-loader', 'sass-loader'], include: appPath }
    ]
  },
  devServer: {
    publicPath: './',
    watchContentBase: true,
    contentBase: path.join(__dirname, 'dist/')
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "app.css" }),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      // Optional for aforementioned
      appMountId: 'root',
      devServer: 'http://localhost:8080',
      baseHref: 'http://localhost:8080',
      links: ['https://fonts.googleapis.com/css?family=Merriweather|Merriweather+Sans']
    })
  ]
}