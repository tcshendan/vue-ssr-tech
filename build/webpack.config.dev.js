const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')

const devServer = {
  contentBase: path.join(__dirname, 'dist'),
    port: 8000,
    host: '0.0.0.0',
    hot: true,
    overlay: true
}

let config

config = merge(baseConfig, {
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path]-[name]-[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'stylus-loader'
          }
        ]
      }
    ]
  },
  devServer,
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
})

module.exports = config