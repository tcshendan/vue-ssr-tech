const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueClientPlugin = require('vue-server-renderer/client-plugin')
const baseConfig = require('./webpack.config.base')

const devServer = {
  contentBase: path.join(__dirname, 'dist'),
  port: 8000,
  host: '127.0.0.1',
  overlay: {
    errors: true
  },
  headers: { 'Acess-Control-Allow-Origin': '*' },
  historyApiFallback: {
    index: '/public/index.html'
  },
  proxy: {
    '/api': 'http://127.0.0.1:3000',
    '/user': 'http://127.0.0.1:3000'
  },
  hot: true
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
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'template.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueClientPlugin()
  ]
})

module.exports = config
