import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/common/Header'
import Home from '../pages/home/Home.vue'
import Templates from '../pages/templates/Templates.vue'
import Tasks from '../pages/tasks/Tasks.vue'
import About from '../pages/about/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      components: {
        'header': Header,
        'content': Home
      }
    },
    { 
      path: '/templates', 
      components: {
        'header': Header,
        'content': Templates 
      }
    },
    { 
      path: '/tasks', 
      components: {
        'header': Header,
        'content': Tasks
      } 
    },
    { 
      path: '/about', 
      components: {
        'content': About
      } 
    }
  ]
})