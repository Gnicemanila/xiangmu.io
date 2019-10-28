import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sign:false,
    isBoss:false,
    play:"王者农药",
    user:null,//保存用户信息
  },
  mutations: {
    changeName(state,user){
      state.user=user
    }
  },
  actions: {
    runName(改变,user){
      改变.commit("changeName",user)
    }
  },
  modules: {
  }
})
