const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

module.exports = merge({}, baseConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  devtool: 'inline-source-map',
  mode: 'development',
  node: {
    'fs': 'empty'
  },
  devServer: {
    hot: true,
    port: 9000,
    contentBase: 'dist',
    hot: true,
    historyApiFallback: true,
    stats: {
      children: false
    }
  },

})