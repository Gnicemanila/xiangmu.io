# xiangmu

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 接口文档 
    https://www.apiopen.top/api.html#c14353b903984e699c31c08f639baaff
### 优化打包 使用了插件
    npm install --save-dev image-webpack-loader
    npm install --save-dev compression-webpack-plugin
### 配置了configjs
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
        参考的作者
        https://www.jianshu.com/p/5e9c78a6a960  
