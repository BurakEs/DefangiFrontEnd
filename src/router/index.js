import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Moon from '@/components/Moon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/moon',
      name: 'Moon',
      component: Moon
    },
  ]
})
