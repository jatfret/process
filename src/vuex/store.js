import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'text1', done: true },
      { id: 2, text: 'text2', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    updateCount(state, value) {
      state.count = value
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  },
  strict: true
})

export default store