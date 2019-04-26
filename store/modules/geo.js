const state = ()=>({
  position: {},
  userId: "i'm ok",
})

const mutations = {
  setPosition(state, val) {
    state.position = val
  },
  setUserId(state, val) {
    state.userId = val
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
