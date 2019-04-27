const state = ()=>({
  position: {},
  userId: "i'm ok",
  isPay: "发布了么",
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
  }
}

const actions = {
  setPosition: ({commit}, position)=>{
    commit('setPosition', position)
  },
  setUserId: ({commit}, position)=>{
    commit('setUserId', position)
  },
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
