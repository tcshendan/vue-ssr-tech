const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')

let config

config = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: path.join(__dirname, '../client/index.js'),
    vendor: ['vue']
  },
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: ExtractTextWebpackPlugin.extract({
            fallback: 'style-loader',
            use: [
            {
                loader: 'css-loader'
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
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ExtractTextWebpackPlugin('styles.[hash:8].css')
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: 'vendor',
          chunks: 'all',
          priority: 10
        }
      }
    }
  }
})

module.exports = config