import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blurbs: [
      {
        id:1,
        text:"I value honest, transparent communication to make your programming dreams come true!",
        img:"insert URL here"
      },
      {
        id:2,
        text:"What should even go here, I really don't know man... I guess we'll find out eventually!",
        img:"insert URL here"
      }
  ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
