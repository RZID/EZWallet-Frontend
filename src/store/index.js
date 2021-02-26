import Vue from 'vue'
import Vuex from 'vuex'
import modulAuth from './modules/auth'
import modulUsers from './modules/users'
import modulHistory from './modules/history'
import modulCheckPin from './modules/checkpin'
import modulTransfer from './modules/transfer'

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
    auth: modulAuth,
    users: modulUsers,
    history: modulHistory,
    pin: modulCheckPin,
    transfer: modulTransfer
  }
})
