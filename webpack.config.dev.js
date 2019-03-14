require("@babel/polyfill");

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const publicPath = path.join(process.cwd(), '..', 'public');
const staticPath = path.join(publicPath, 'static');
const appPath = path.resolve(__dirname, 'app');

module.exports = {
  mode: "development",
  entry: {
    app: ["@babel/polyfill", "./app/index.js"]
  },
  output: {
    path: path.join(staticPath, 'js'),
    filename: "app.js"
  },
  module: {
    rules: [
      { test: /\.m?js$/, use: { loader: 'babel-loader' }, exclude: /(node_modules|bower_components)/, include: appPath },
      { test: /\.(sa|sc|c)ss$/, use: ['style-loader', 'css-loader', 'sass-loader'], include: appPath }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "app.css" })
  ]
}