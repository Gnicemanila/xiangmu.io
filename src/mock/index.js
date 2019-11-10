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


//验证码

Mock.mock('/getcode', 'get', {
    status: 200,
    message: "我是王五",
    'data': {
        code: /[0-9]{4}$/
    }
})
///手机验证码
Mock.mock('/getphonecode', 'get', {
    status: 200,
    message: "我是王五",
    'data': {
        code: /[0-9]{4}$/
    }
})
// 登录
Mock.mock('/getlogin', 'post', function (opttion) {
    let user = JSON.parse(opttion.body)
    return {
        status: 200,
        message: "登录成功",
        data: {
            'id': '9527',
            'name': user.name,
            'real_name': '胡歌',
            'sex': 0,
            'phone': '188****8888',
            'card': "6222********1234",
            'integral': 580,
            'coin': 690,
            isBoss: false
        }
    }
})

Mock.mock('/register', 'post', function (opttion) {
    let user = JSON.parse(opttion.body)
    return {
        status: 200,
        message: "登录成功",
        data: {
            'id': '9527',
            'name': user.name,
            'integral': 580,
            'coin': 690,
            'isBoss': false,
            'phone': user.phone,
        }
    }
})

Mock.mock('/getchatlist', 'post', function (opttion) {
    let user = JSON.parse(opttion.body)
    return {
        status: 200,
        message: "获取成功",
        data:[
            {
                name: "彭于晏",
                avatar: "1",
                vip: "1",
                time: '20:11:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: false,
            },
            {
                name: "胡歌",
                avatar: "2",
                vip: "1",
                time: '20:13:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: true,
            },
            {
                name: "彭于晏",
                avatar: "1",
                vip: "1",
                time: '20:11:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: false,
            },
            {
                name: "胡歌",
                avatar: "2",
                vip: "1",
                time: '20:13:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: true,
            },
            {
                name: "彭于晏",
                avatar: "1",
                vip: "1",
                time: '20:11:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: false,
            },
            {
                name: "胡歌",
                avatar: "2",
                vip: "1",
                time: '20:13:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: true,
            },
            {
                name: "彭于晏",
                avatar: "1",
                vip: "1",
                time: '20:11:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: false,
            },
            {
                name: "胡歌",
                avatar: "2",
                vip: "1",
                time: '20:13:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: true,
            },
            {
                name: "彭于晏",
                avatar: "1",
                vip: "1",
                time: '20:11:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: false,
            },
            {
                name: "胡歌",
                avatar: "2",
                vip: "1",
                time: '20:13:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: true,
            },
            {
                name: "彭于晏",
                avatar: "1",
                vip: "1",
                time: '20:11:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: false,
            },
            {
                name: "胡歌",
                avatar: "2",
                vip: "1",
                time: '20:13:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: true,
            },
        ]
    }
})
Mock.mock('/getweibolist', 'post', function (opttion) {
    let user = JSON.parse(opttion.body)
    return {
        status: 200,
        message: "获取成功",
        data:[
            {
                name: "彭于晏",
                avatar: "1",
                vip: "1",
                time: '20:11:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: false,
            },
            {
                name: "胡歌",
                avatar: "2",
                vip: "1",
                time: '20:13:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: true,
            },
            {
                name: "彭于晏",
                avatar: "1",
                vip: "1",
                time: '20:11:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: false,
            },
            {
                name: "胡歌",
                avatar: "2",
                vip: "1",
                time: '20:13:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: true,
            },
            {
                name: "彭于晏",
                avatar: "1",
                vip: "1",
                time: '20:11:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: false,
            },
            {
                name: "胡歌",
                avatar: "2",
                vip: "1",
                time: '20:13:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: true,
            },
            {
                name: "彭于晏",
                avatar: "1",
                vip: "1",
                time: '20:11:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: false,
            },
            {
                name: "胡歌",
                avatar: "2",
                vip: "1",
                time: '20:13:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: true,
            },
            {
                name: "彭于晏",
                avatar: "1",
                vip: "1",
                time: '20:11:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: false,
            },
            {
                name: "胡歌",
                avatar: "2",
                vip: "1",
                time: '20:13:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: true,
            },
            {
                name: "彭于晏",
                avatar: "1",
                vip: "1",
                time: '20:11:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: false,
            },
            {
                name: "胡歌",
                avatar: "2",
                vip: "1",
                time: '20:13:38',
                message: "大家都是知道的我的名字就是一个形容词！primary",
                isme: true,
            },
        ]
    }
})