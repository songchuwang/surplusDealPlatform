import Vue from "vue"
import Vuex from "vuex"
import geo from "./modules/geo"
import home from "./modules/home"
import search from './modules/search'
Vue.use(Vuex)

const store = ()=>new Vuex.Store({
  modules:{
    geo,
    home,
    search
  },
  actions: {
    async nuxtServerInit({commit}, {req, app}) {
      {
        app.$axios.get('/users/getUser').then(res => {
          console.log('test',res.data._id);
          
          commit('geo/setUserId', res.data._id)
        })
        // commit('geo/setPosition', status === 200 ? {city, province} : {city: '', province: ''})
      }
      
      {
        const {status, data: {province, city}} = await app.$axios.get('/geo/getPosition')
        commit('geo/setPosition', status === 200 ? {city, province} : {city: '', province: ''})
      }

      // {
      //   const {status, data: {menu}} = await app.$axios.get('/geo/menu')
      //   commit('home/setMenu', status === 200 ? menu : [])
      // }

      // {
      //   //console.log(app)
      //   const {status, data: {result}} = await app.$axios.get('/search/hotPlace', {
      //     params: {
      //       city: app.store.state.geo.position.city.replace('市', '')
      //     }
      //   })
      //   commit('search/setHotPlace', status === 200 ? result : [])
      // }

    }
  }
})

export default store;
