import axios from "axios"
const modulTransfer = {
  namespaced: true,
  state: () => {
    return {
    }
  },
  mutations: {
  },
  actions: {
    actionPending(context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.rootState.setURL}/api/transfer/${data.id}`, data.data, { headers: { token: data.token } }).then((response) => {
          resolve(response.data.message)
        }).catch((err) => {
          reject(err.response.data.message)
        })
      })
    },
    actionSuccess(context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.rootState.setURL}/api/transferSuccess/${data.id}`, data, { headers: { token: data.token } }).then((response) => {
          resolve(response.data.message)
        }).catch((err) => {
          reject(err.response.data.message)
        })
      })
    },
    actionCancelReceiver(context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.rootState.setURL}/api/transferCancel/${data.id}`, data, { headers: { token: data.token } }).then((response) => {
          resolve(response.data.message)
        }).catch((err) => {
          reject(err.response.data.message)
        })
      })
    },
    actionCancelSender(context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.rootState.setURL}/api/transferCancelSender/${data.id}`, data, { headers: { token: data.token } }).then((response) => {
          resolve(response.data.message)
        }).catch((err) => {
          reject(err.response.data.message)
        })
      })
    }
  },
  getters: {
  }
}
export default modulTransfer
