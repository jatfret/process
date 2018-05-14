import Vue from 'vue'
import store from './vuex/store.js'
import router from './router'
import App from './App.vue'

new Vue({
  el: '#root',
  store,
  router,
  render: h => h(App)
})