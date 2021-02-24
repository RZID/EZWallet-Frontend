import axios from "axios"
// import axios from 'axios'
const modulUsers = {
  namespaced: true,
  state: () => {
    return {
      userDetail: {}
    }
  },
  mutations: {
  },
  actions: {
    actionGetUser (context, data) {
      return new Promise((resolve, reject) => {
        axios.get(`${context.rootState.setURL}/api/user/${data.id}`, { headers: { token: data.token } })
        .then((response) => {
          // console.log(response.data.data)
          resolve(response.data.data)
        }).catch((err) => {
          reject(err.response.data.message)
        })
      })
    }
  },
  getters: {
  }
}
export default modulUsers
