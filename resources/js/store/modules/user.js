export default {
  actions: {
    setSnackbar({commit}, snackbar){
      commit('setSnackbar', snackbar)
    },
    userLogin({commit}, data){
      commit('userLogin', data)
    },
    userLogout({commit}){
        commit('userLogout')
    },
    userRefresh({commit}, data){
      commit('userRefresh', data)
    }
  },
  mutations: {
    setSnackbar(state, snackbar){
      state.snackbar = snackbar
    },
    userLogin(state, data) {
      state.user = data.user
      state.auth = true
      state.token = data.token
    },
    userLogout(state) {
      state.user = null
      state.auth = false
      state.token = null
    },
    userRefresh(state, data){
      state.user = data
    }
  },
  state: {
    auth: false,
    user: null,
    token: null,
    snackbar: {}
  },
  getters: {
    getAuth(state){
      return state.auth
    },
    getUser(state){
      return state.user
    },
    getToken(state){
        return state.token
    },
    snackbar(state){
      return state.snackbar
    }
  }
}
