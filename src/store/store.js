import Vue from 'vue'
import Vuex from 'vuex'
import products from './products'
import user from './user'
import common from './common'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    user,
    common
  },
  state: {},
  mutations: {},
  actions: {}
})
