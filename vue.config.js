const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
   //webpack配置
  publicPath: process.env.NODE_ENV === 'production'?'./':'/',// 部署应用包时的基本 URL
  assetsDir: 'static',
  outputDir:'docs',
  configureWebpack: {
    //关闭 webpack 的性能提示
    performance: {
      hints: false
    }
    //或者

    //警告 webpack 的性能提示
    // performance: {
    //   hints:'warning',
    //   //入口起点的最大体积
    //   maxEntrypointSize: 50000000,
    //   //生成文件的最大体积
    //   maxAssetSize: 30000000,
    //   //只给出 js 文件的性能提示
    //   assetFilter: function(assetFilename) {
    //     return assetFilename.endsWith('.js');
    //   }
    // }
  }
  ,
  chainWebpack: config => {
    // 解决ie11兼容ES6
    config.entry('main').add('babel-polyfill')
    // 开启图片压缩
    config.module.rule('images')
    .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    .use('image-webpack-loader')
    .loader('image-webpack-loader')
    .options({ bypassOnDebug: true })
    // 开启js、css压缩
    if (process.env.NODE_ENV === 'production') {
      config.plugin('compressionPlugin')
      .use(new CompressionPlugin({
        test:/\.js$|\.html$|.\css/, // 匹配文件名
        threshold: 10240, // 对超过10k的数据压缩
        deleteOriginalAssets: false // 不删除源文件
      }))
    }
  },
  transpileDependencies: [
        'biyi-admin', // 指定对第三方依赖包进行babel-polyfill处理
    ],
  productionSourceMap:false,//是否打包出来map文件 去优化当前js
  css: {
    loaderOptions: {
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        modifyVars: require('./theme'),
      },
    },
  },
};
