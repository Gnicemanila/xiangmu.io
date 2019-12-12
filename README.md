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
### theme js
    网站主题js @primary 基础色

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 接口文档 
    https://www.apiopen.top/api.html#c14353b903984e699c31c08f639baaff
    
### 配置了configjs
        参考的作者
       https://www.jianshu.com/p/3043d474fb86
       
       
###  在封装倒计时的组件时候 用new Date 的方式转时间 会报错不能用  这时候就要用dayjs 来转换
    import dayjs from "dayjs";
    new Date(message.game_config.)
    ====>dayjs(next_schedule_time).valueOf()
    
