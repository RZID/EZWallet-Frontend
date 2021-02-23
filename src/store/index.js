import Vue from 'vue'
import Vuex from 'vuex'
import modulAuth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    setURL: process.env.VUE_APP_BACKEND
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: modulAuth
  }
})
