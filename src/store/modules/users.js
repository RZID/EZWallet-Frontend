import axios from "axios"
const modulUsers = {
  namespaced: true,
  state: () => {
    return {
      userDetail: {}
    }
  },
  mutations: {
    setUserDetail(state, payload) {
      state.userDetail = payload
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
      console.log(context)
      console.log(data)
    }
  },
  getters: {
    getDetailUser: state => state.userDetail
  }
}
export default modulUsers
