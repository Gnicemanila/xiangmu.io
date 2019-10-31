const state={
    name:"王者荣耀",
    vip:"99",
    time:'20:11:38'
}
const getters ={
    getGame(state){
        return state.game
    },
    getPosition(state){
        return state.position
    }
}

const mutations ={
    changeName(state,name){
        state.game=name
    },
    changePosition(state,vip){
        state.vip=vip
    }
}

const actions ={
    cgame(context,name){
        context.commit('changeName',name)
    },
    cposition(context,vip){
        context.commit('changePosition',vip)
    }
}

export default {
    namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}