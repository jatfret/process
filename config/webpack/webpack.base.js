const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  context: path.resolve(__dirname, '../../'),
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve('dist')
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'jsplumb': '../../node_modules/jsplumb/dist/js/jsplumb.js',
      // 'vue': 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [
          "babel-loader",
          "eslint-loader",
        ],
        exclude: /node_modules/        
      },
      {
        test: /\.l?[ec]ss$/,
        use: [
          process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
        exclude: /node_modules/        
      },
      // {
      //   test: /\.css$/,
      //   loader: ['style-loader', 'css-loader'],
      //   exclude: /node_modules/        
      // }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: './css/style.css',
      ignoreOrder: true
    })
  ],
  optimization: {
    splitChunks: {
      name: 'commons',
      filename: 'commons.js',
      chunks: "all",
      minSize: 0,
      minChunks: 1,
      maxAsyncRequests: 1,
      maxInitialRequests: 1,
    }
  },
  node: {
    'fs': 'empty'
  },
}