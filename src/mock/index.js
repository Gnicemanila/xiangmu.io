import Mock from 'mockjs' // 引入mock
var dataList = []
for (var i = 0; i < 15; i++) {
    dataList.push(Mock.mock({
        'id': '@increment',
        'name': '@cname',
        'integral': /[0-9]{4}$/,
        'coin': /[0-9]{4}$/,
        'address': '@county(true)',
        'createTime': '@date("yyyy-MM-dd")'
    }))
}

// 登录
Mock.mock('/getcode','get',{
    status:200,
    message:"我是王五",
    'data':{
        code:/[0-9]{4}$/
    }
})

Mock.mock('/getlogin','post',function(opttion){
    console.log(opttion)
    return {
        status:200,
        message:"登录成功",
        data:{
         'id': '9527',
        'name': '胡歌',
        'integral': 580,
        'coin': 690,
        }
    }
})