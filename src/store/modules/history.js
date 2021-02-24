import axios from "axios"
const modulHistory = {
  namespaced: true,
  state: () => {
    return {
      tokenAdmin: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2MTQxNzgyMTB9.lrJrAqxQeIwiKpj-u8-KiBYas1po-AjM7yrcX9_5aZA'
    }
  },
  mutations: {
  },
  actions: {
    postHistory(context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.rootState.setURL}/api/history`, data, { headers: { token: context.state.tokenAdmin } }).then((response) => {
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
export default modulHistory
