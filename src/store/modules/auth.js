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
    setID(state, payload) {
      state.id = payload
    },
    setToken(state, payload) {
      state.token = payload
    }
  },
  actions: {
    registerUser(context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.rootState.setURL}/api/register`, data).then((response) => {
          resolve(response.data.message)
        }).catch((err) => {
          reject(err.response.data.message)
        })
      })
    },
    loginUser(context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.rootState.setURL}/api/login`, data).then((response) => {
          localStorage.setItem('id', response.data.id)
          localStorage.setItem('token', response.data.token)
          context.commit('setID', response.data.id)
          context.commit('setToken', response.data.token)
          console.log(response.data)
          resolve(response.data.message)
        }).catch((err) => {
          reject(err.response.data.message)
        })
      })
    },
    actionSetPin(context, data) {
      // console.log(context.state.token)
      // console.log(context.state.id)
      // console.log(data)
      return new Promise((resolve, reject) => {
        axios.patch(`${context.rootState.setURL}/api/user/${context.state.id}`, data, { headers: { token: context.state.token } }).then((response) => {
          resolve(response.data.message)
        }).catch((err) => {
          reject(err)
        })
      })
    }
  },
  getters: {
    getID: state => state.id,
    getToken: state => state.token
  }
}
export default modulAuth
