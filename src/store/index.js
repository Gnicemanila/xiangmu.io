import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sign:false,
    isBoss:false,
    play:"王者农药"
  },
  mutations: {
    changeName(state,sign){
      state.sign=sign
    }
  },
  actions: {
    runName(改变,sign){
      改变.commit("changeName",sign)
    }
  },
  modules: {
  }
})
