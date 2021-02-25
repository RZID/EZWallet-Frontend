import axios from "axios"
const modulHistory = {
  namespaced: true,
  state: () => {
    return {
      imgURL: process.env.VUE_APP_BACKEND,
      tokenAdmin: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2MTQxNzgyMTB9.lrJrAqxQeIwiKpj-u8-KiBYas1po-AjM7yrcX9_5aZA',
      dataAllUser: [],
      detailTransfer: {}
    }
  },
  mutations: {
    setDataAllUser(state, payload) {
      state.dataAllUser = payload
    },
    setDetailTransfer(state, payload) {
      state.detailTransfer = payload
    }
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
    },
    getAllHistoryUser(context, data) {
      axios.get(`${context.rootState.setURL}/api/history/${data.id}`, { headers: { token: data.token } }).then((response) => {
        context.commit('setDataAllUser', response.data.data)
      }).catch((err) => {
        console.log(err.response.data.message)
      })
    },
    detailTransfer(context, data) {
      context.commit('setDetailTransfer', data)
    }
  },
  getters: {
    getDataAllUser: state => state.dataAllUser,
    getURL: state => state.imgURL,
    getDetailTreansfer: state => state.detailTransfer
  }
}
export default modulHistory
