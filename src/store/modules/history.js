import axios from "axios"
const modulHistory = {
  namespaced: true,
  state: () => {
    return {
      imgURL: process.env.VUE_APP_BACKEND,
      tokenAdmin: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2MTQxNzgyMTB9.lrJrAqxQeIwiKpj-u8-KiBYas1po-AjM7yrcX9_5aZA',
      dataAllUser: [],
      detailTransfer: {},
      detailHistory: {},
      totalData: ''
    }
  },
  mutations: {
    setDataAllUser(state, payload) {
      state.dataAllUser = payload
    },
    setDetailTransfer(state, payload) {
      state.detailTransfer = payload
    },
    setDetailHistory(state, payload) {
      state.detailHistory = payload
    },
    setTotalData(state, payload) {
      state.totalData = payload
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
      return new Promise((resolve, reject) => {
        axios.get(`${context.rootState.setURL}/api/history/${data.id}?sort=${data.sort}&page=${data.page}&limit=${data.limit}`, { headers: { token: data.token } }).then((response) => {
          context.commit('setDataAllUser', response.data.data)
          context.commit('setTotalData', response.data.pagination.totalData)
          resolve(response.data.message)
        }).catch((err) => {
          reject((err.response.data.message))
        })
      })
    },
    detailTransfer(context, data) {
      context.commit('setDetailTransfer', data)
    },
    detailHistory(context, data) {
      context.commit('setDetailHistory', data)
    }
  },
  getters: {
    getDataAllUser: state => state.dataAllUser,
    getURL: state => state.imgURL,
    getDetailTreansfer: state => state.detailTransfer,
    getDetailHistory: state => state.detailHistory,
    getTotalData: state => state.totalData
  }
}
export default modulHistory
