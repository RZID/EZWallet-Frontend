import axios from "axios"
const modulUsers = {
  namespaced: true,
  state: () => {
    return {
      userDetail: {},
      allUser: []
    }
  },
  mutations: {
    setUserDetail(state, payload) {
      state.userDetail = payload
    },
    setAllUser(state, payload) {
      state.allUser = payload
    }
  },
  actions: {
    actionGetUser (context, data) {
      return new Promise((resolve, reject) => {
        axios.get(`${context.rootState.setURL}/api/user/${data.id}`, { headers: { token: data.token } })
        .then((response) => {
          context.commit('setUserDetail', response.data.data)
          resolve(response.data.data)
        }).catch((err) => {
          reject(err.response.data.message)
        })
      })
    },
    actionTopUp (context, data) {
      return new Promise((resolve, reject) => {
        axios.patch(`${context.rootState.setURL}/api/user/${data.id}`, data.data, { headers: { token: data.token } }).then((response) => {
          resolve(response.data.message)
        }).catch((err) => {
          reject(err.response.data.message)
        })
      })
    },
    actionGetAllUser (context, data) {
      return new Promise((resolve, reject) => {
        axios.get(`${context.rootState.setURL}/api/allUser/${data.id}?search=${data.search}`, { headers: { token: data.token } }).then((response) => {
          context.commit('setAllUser', response.data.data)
          resolve(response.data.message)
        }).catch((err) => {
          reject(err.response.data.message)
        })
      })
    }
  },
  getters: {
    getDetailUser: state => state.userDetail,
    getAllUser: state => state.allUser
  }
}
export default modulUsers
