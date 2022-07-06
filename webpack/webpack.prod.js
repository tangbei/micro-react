const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { distPath, publicPath } = require('./config.js');

module.exports = merge(baseConfig, {
  mode: 'production', // 生产模式,会开启tree-shaking和压缩代码,以及其他优化

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css' // 抽离css的输出目录和名称
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      // 压缩css
      new CssMinimizerWebpackPlugin(),
      // 压缩js
      new TerserWebpackPlugin({
        parallel: true, // 开启多线程
        terserOptions: {
          compress: {
            pure_funcs: ["console.log"], // 删除console.log
          }
        }
      })
    ],
  },
})