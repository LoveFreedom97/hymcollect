import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=>import('@/components/login')
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: ()=>import('@/components/HelloWorld')
    },
  ]
})
