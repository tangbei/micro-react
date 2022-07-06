const ProdWebpack = require('./webpack.prod');
const { merge } = require('webpack-merge');
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasureWebpackPlugin();
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const AnalyzerWebpack = smp.wrap(merge(ProdWebpack, {
  plugins: [
    new BundleAnalyzerPlugin() // 配置分析打包结果插件
  ],
}));

module.exports = AnalyzerWebpack;