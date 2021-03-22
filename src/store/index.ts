import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [] as any,
    mode: 'up' as string,
    modalShow: false as boolean
  },
  mutations: {
    SET_USERS: (state, users) => {
      state.users = users
    },

    changeMode: (state, mode) => {
      state.mode = mode
    },

    changeModalView: (state, payload) => {
      state.modalShow = payload
    }
  },
  actions: {
    SET_USERS: (context, users) => {
      fetch('https://my-json-server.typicode.com/Vespand/crmm-tasks/users')
        .then(data => data.json())
        .then(data => {
          context.commit('SET_USERS', data)
        })
    }
  },
  modules: {
  }
})
