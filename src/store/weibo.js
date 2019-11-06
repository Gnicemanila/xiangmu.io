const state = {
    weiboList: [
        {
            name: "彭于晏",
            avatar: "1",
            vip: "1",
            time: '20:11:38',
            message: "大家都是知道的我的名字就是一个形容词！primary",
            isme: false,
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
            name: "彭于晏",
            avatar: "1",
            vip: "1",
            time: '20:11:38',
            message: "大家都是知道的我的名字就是一个形容词！primary",
            isme: false,
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
            name: "彭于晏",
            avatar: "1",
            vip: "1",
            time: '20:11:38',
            message: "大家都是知道的我的名字就是一个形容词！primary",
            isme: false,
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
            message: "大家都是知道的我的名字就是一个形容词！我就是胡歌",
            isme: true,
        },
    ],
}
const getters = {
    getList(state) {
        return state.weiboList
    },
}

const mutations = {
    changeMessage(state, List) {
        state.weiboList.push(List)
    },
}

const actions = {
    updateList(context, List) {
        context.commit('changeMessage', List)
    },
}

export default {
    namespaced: true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}