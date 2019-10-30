module.exports = {
   //webpack配置
  publicPath: process.env.NODE_ENV === 'production'?'./docs/':'/',// 部署应用包时的基本 URL
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
