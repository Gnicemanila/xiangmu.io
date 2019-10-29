module.exports = {

  //webpack配置
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
