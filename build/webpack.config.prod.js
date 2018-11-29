const path = require('path')
const merge = require('webpack-merge')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueClientPlugin = require('vue-server-renderer/client-plugin')
const baseConfig = require('./webpack.config.base')

let config

config = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: path.join(__dirname, '../client/client-entry.js')
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'vue-style-loader',
          use: [
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
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'template.html')
    }),
    new ExtractTextWebpackPlugin({
      filename: 'styles.[hash:8].css',
      allChunks: true
    }),
    new VueClientPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true
  }
})

module.exports = config
