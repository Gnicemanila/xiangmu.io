import Vue from 'vue'
import Vuex from 'vuex'
import chat from './chat'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null,//保存用户信息
  },
  mutations: {
    changeName(state, user) {
      state.user = user
    }
  },
  actions: {
    runName(改变, user) {
      改变.commit("changeName", user)
    }
  },
  modules: {
    chat
  }
})
