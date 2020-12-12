import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'con',
    component: () => import('../views/container.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/editors',
    name: 'editors',
    component: () => import('../views/editors.vue')
  },
  {
    path: '/endstyle',
    name: 'endstyle',
    component: () => import('../views/endstyle.vue')
  },
  {
    path:'/home',
    name:'home',
    component:() => import('../views/home.vue')
  },  
  {
    path:'/show',
    name:'show',
    component:() => import('../views/show.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
