const isProduction = process.env.NODE_ENV === 'production';
// 本地环境是否需要使用cdn
const devNeedCdn = false

// cdn链接
const cdn = {
    // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
    externals: {
        vue: 'Vue',
        vuex: 'Vuex',
        'vue-router': 'VueRouter',
        'axios': 'axios'
    },
    // cdn的css链接
    css: [],
    // cdn的js链接
    js: [
        'https://cdn.staticfile.org/vue/2.6.10/vue.min.js',
        'https://cdn.staticfile.org/vuex/3.0.1/vuex.min.js',
        'https://cdn.staticfile.org/vue-router/3.0.3/vue-router.min.js',
        'https://cdn.bootcss.com/axios/0.18.0/axios.min.js',
    ]
}
module.exports = {
  //webpack配置
  publicPath: isProduction ? './' : '/',// 部署应用包时的基本 URL
  assetsDir: 'static',
  outputDir: 'docs',
  configureWebpack: config => {
    // 用cdn方式引入，则构建时要忽略相关资源
    if (isProduction || devNeedCdn) config.externals = cdn.externals
  }
  ,
  chainWebpack: config => {
    // 解决ie11兼容ES6
    config.entry('main').add('babel-polyfill')
    // ============压缩图片 start============
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ bypassOnDebug: true })
      .end()
    // ============压缩图片 end============
    // ============注入cdn start============
config.plugin('html').tap(args => {
  // 生产环境或本地需要cdn时，才注入cdn
  if (isProduction || devNeedCdn) args[0].cdn = cdn
  return args
})
// ============注入cdn start============
  },
  transpileDependencies: [
    'biyi-admin', // 指定对第三方依赖包进行babel-polyfill处理
  ],
  productionSourceMap: false,//是否打包出来map文件 去优化当前js
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
