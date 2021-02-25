import axios from "axios"
const modulCheckPin = {
  namespaced: true,
  state: () => {
    return {
    }
  },
  mutations: {
  },
  actions: {
    checkPin (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.rootState.setURL}/api/loginPIN/${data.id}`, data.data, { headers: { token: data.token } }).then((response) => {
          // console.log(response.data.message)
          resolve(response.data.message)
        }).catch((err) => {
          // console.log(err.response.data.message)
          reject(err.response.data.message)
        })
      })
    }
  },
  getters: {
  }
}
export default modulCheckPin
