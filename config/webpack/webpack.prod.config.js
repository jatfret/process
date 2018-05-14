const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const baseConfig = require('./webpack.base.js')

module.exports = merge({}, baseConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CleanWebpackPlugin(['dist'])
  ],
  mode: 'production',
  devtool: 'source-map',
  node: {
    'fs': 'empty'
  },
})