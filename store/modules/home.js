const state = ()=>({
  menu: [],
  hotPlace: [],
  user: '123456'
})

const mutations = {
  setMenu(state, val) {
    state.menu = val
  },
  setHotPlace(state, val) {
    state.hotPlace = val
  },
  setUserId(state, val) {
    state.user = val
  }
}

const actions = {
  setMenu: ({commit}, menu)=>{
    commit('setMenu', menu)
  },
  setHotPlace: ({commit}, hotPlace)=>{
    commit('setHotPlace', hotPlace)
  },
  setUserId:({commit}, val)=>{
    commit('setUserId', val)
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
