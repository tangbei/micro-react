const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const { isDev, entryPath, publicPath, distPath, srcPath, alias } = require('./config');

const BaseWebpack = {
  // 入口配置
  entry: entryPath,
  output: {
    // 输出路径
    path: distPath,
    // 文件命名 = 名称 + 8位chunkhash + bundle
    filename: '[name].[chunkhash:8].bundle.js',
    // publicPath: "/",
    chunkFilename: 'chunk/[name].[chunkhash:8].js',
    // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    clean: true,
  },
  cache: {
    type: 'filesystem', // 使用文件缓存
  },
  module: {
    // 将缺失的导出提示成错误而不是警告
    strictExportPresence: true,
    // loaders
    rules: [
      {
        test: /\.(ts|tsx|jsx|js)$/,
        include: srcPath,
        use: [
          'thread-loader',
          'babel-loader?cacheDirectory',
        ],
      },
      {
        test: /.(css|less)$/, //匹配 css 文件
        use: [
          // 开发环境使用style-looader,打包模式抽离css
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                mode: 'local',
                auto: true,
                exportGlobals: true,
                localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[local]--[hash:base64:5]',
                localIdentContext: srcPath,
                namedExport: false,
                exportLocalsConvention: 'camelCase',
                // exportOnlyLocals: false,
              },
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer']
              }
            }
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                  '@primary-color': '#015BF8',
                  '@link-color': '#015BF8',
                  '@font-size-base': '44px',
                }
              },
            },
          }
          // 'less-loader'
        ]
      },
      {
        test:/.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator:{ 
          filename:'dist/images/[name][ext]', // 文件输出目录和命名
        },
      },
      {
        test:/.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator: {
          filename:'dist/media/[name][ext]', // 文件输出目录和命名
        },
      },
    ]
  },
  resolve: {
    // 忽略后缀
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    // alias,
    plugins: [
      // 使用tsconfig中的paths设置alias
      new TsConfigPathsPlugin()
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: `${publicPath}/index.ejs`,
        favicon: `${publicPath}/favicon.ico`,
        title: '测试html的title', // 生成html的标题
        filename: 'index.html',
        inject: 'body', // 注入文件内容的位置
        hash: true,
        cache: false,
        minify: isDev ? false : {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            useShortDoctype: true,
          }, // 控制以何种方式缩小输出
    }),
    new WebpackBar()
  ],
};

module.exports = BaseWebpack;