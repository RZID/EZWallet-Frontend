import axios from 'axios'
const modulAuth = {
  namespaced: true,
  state: () => {
    return {
      id: localStorage.getItem('id') || null,
      token: localStorage.getItem('token') || null,
    }
  },
  mutations: {
    setID (state, payload) {
      state.id = payload
    },
    setToken (state, payload) {
      state.token = payload
    }
  },
  actions: {
    registerUser (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.rootState.setURL}/api/register`, data).then((response) => {
          // console.log(response.data.message)
          resolve(response.data.message)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    loginUser (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.rootState.setURL}/api/login`, data).then((response) => {
          localStorage.setItem('id', response.data.id)
          localStorage.setItem('token', response.data.token)
          context.commit('setID', response.data.id)
          context.commit('setToken', response.data.token)
          resolve(response.data.message)
        }).catch((err) => {
          reject(err)
        })
      })
    }
  },
  getters: {
  }
}
export default modulAuth
