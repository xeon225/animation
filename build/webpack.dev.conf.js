'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),

    //ps4
    new HtmlWebpackPlugin({
      filename: 'animation/ps4.html',
      template: 'tpl/animation/ps4.html',
      inject: true,
      chunks:['ps4']
    }),
    // 雷达图
    new HtmlWebpackPlugin({
      filename: 'animation/drawingList.html',
      template: 'tpl/animation/drawingList.html',
      inject: true,
      chunks:['drawingList']
    }),
    // 饼图
    new HtmlWebpackPlugin({
      filename: 'animation/pieChart.html',
      template: 'tpl/animation/pieChart.html',
      inject: true,
      chunks:['pieChart']
    }),
    // 折线图
    new HtmlWebpackPlugin({
      filename: 'animation/lineChart.html',
      template: 'tpl/animation/lineChart.html',
      inject: true,
      chunks:['lineChart']
    }),
    // 悖论空间
    new HtmlWebpackPlugin({
      filename: 'animation/antinomy.html',
      template: 'tpl/animation/antinomy.html',
      inject: true,
      chunks:['antinomy']
    }),
    // 马姨呀嘿
    new HtmlWebpackPlugin({
      filename: 'animation/myyh.html',
      template: 'tpl/animation/myyh.html',
      inject: true,
      chunks:['myyh']
    }),
    // 马姨呀嘿Path
    new HtmlWebpackPlugin({
      filename: 'animation/myyhPath.html',
      template: 'tpl/animation/myyhPath.html',
      inject: true,
      chunks:['myyhPath']
    }),
    // 伪类合集
    new HtmlWebpackPlugin({
      filename: 'animation/pseudo.html',
      template: 'tpl/animation/pseudo.html',
      inject: true,
      chunks:['pseudo']
    }),
    
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
