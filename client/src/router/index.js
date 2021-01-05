import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import NotFound from '../views/404.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path:'/index',
    name:'index',
    component:Index
  }, 
  {
    path:'/register',
    name:'register',
    component:Register
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/*',
    name:'404',
    component:NotFound
  }
 
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
