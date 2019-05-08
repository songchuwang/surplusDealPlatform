const state = ()=>({
  position: {},
  userId: "i'm ok",
  isPay: "发布了么",
  user:""
})

const mutations = {
  setPosition(state, val) {
    state.position = val
  },
  setUserId(state, val) {
    state.userId = val
  },
  isPayOff(state, val) {
    state.isPay = val
  },
  getUser(state, val) {
    state.user = val
  }
}

const actions = {
  setPosition: ({commit}, position)=>{
    commit('setPosition', position)
  },
  setUserId: ({commit}, val)=>{
    commit('setUserId', val)
  },
  getUser: ({commit}, val)=>{
    commit('getUser', val)
  },
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
