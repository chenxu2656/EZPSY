import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import NotFound from '../views/404.vue'
import Home from '../views/home.vue'
import Program from '../views/program.vue'
import Programlist from '../views/programlist.vue'

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
    path:'/home',
    name:'home',
    component:Home,
    children:[
      {path:'',component:Program},
      {path:'/program',name:'program',component:Program},
      {path:'/programlist',name:'programlist',component:Programlist}
    ]
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 判断localstorage里面是否有token
  const isLogin = localStorage.eleToken ? true : false;
  
  if(to.path == "/login" || to.path == "/register" || to.path == "/index"){
    next();
  }else{
    // 如果为真，正常跳转，否则跳到登录页面
    isLogin ? next():next('/login');
  }
})


export default router
