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

  resetCounterValue(state) {
    state.count.value = 0
  },
  clearTimer(state) {
    clearInterval(state.count.timerObj)
  },
  timerOn(state) {
    state.count.timerOn = true
  } ,
  timerOff(state) {
    state.count.timerOn = false
  },
}

const actions = {
  plusCounter: ({commit}) => commit("plusCounter"),
  minusCounter: ({commit}) => commit("minusCounter"),

  startTimer: ({commit, state}) => {
    commit("clearTimer")
    state.count.timerObj = setInterval(() => {
      commit("plusCounter")
    }, 1000);
    commit("timerOn")
  },

  stopTimer: ({commit}) => {
    commit("clearTimer")
    commit("timerOff")
  },

  resetCounterValue: ({commit}) => {
    commit("resetCounterValue")
  }
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
