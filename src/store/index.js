import { createStore } from 'vuex'

const state = {
  count: {
    value: 0,
    timerOn: false,
    timerObj: null
  },
}

const getters = {
  getCount(state) {
    return state.count.value
  } 
}
const mutations = {
  plusCounter(state) {
    state.count.value++
  },
  minusCounter(state) {
    state.count.value--
  },
}

const actions = {
  plusCounter: ({commit}) => commit("plusCounter"),
  minusCounter: ({commit}) => commit("minusCounter"),
}

const modules = {

}

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules
})
