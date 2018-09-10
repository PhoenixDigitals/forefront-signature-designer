import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  firstname: 'Elon',
  lastname: 'Musk',
  role: 'Konsult',
  address: 'Stationsgatan 37M, 302 50 Halmstad',
  mobile: '+46 123 45 67 89',
  office: '+46 8 410 600 00',
  website: 'www.ffcg.se',
  website_url: 'https://www.ffcg.se'
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  updateFirstname(state, firstname) {
    state.firstname = firstname
  },
  updateLastname(state, lastname) {
    state.lastname = lastname
  },
  updateRole(state, role) {
    state.role = role
  },
  updateAddress(state, address) {
    state.address = address
  },
  updateMobile(state, mobile) {
    state.mobile = mobile
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  updateFirstname: ({ commit }) => commit('updateFirstname'),
  updateLastname: ({ commit }) => commit('updateLastname'),
  updateRole: ({ commit }) => commit('updateRole'),
  updateAddress: ({ commit }) => commit('updateAddress')
}

// getters are functions
const getters = {
  firstname: state => state.firstname,
  lastname: state => state.lastname,
  role: state => state.role,
  address: state => state.address,
  mobile: state => state.mobile,
  office: state => state.office,
  website: state => state.website,
  website_url: state => state.website_url,
  html: state => {
    var html =
      `
    <div>
      <span>{{` +
      state.address +
      `}}</span>
    </div>
  `

    return html
  }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
