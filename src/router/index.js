import Vue from 'vue'
import VueRouter from 'vue-router'
//更多关于个人中心的'../views/personal/Personal.vue'
import Info from '../views/personal/Info.vue'
//主功能
import Play from '../views/Play.vue'
import Chat from '../views/Chat.vue'
//更多关于系统的
import More from '../views/More.vue'
import AboutMe from '../views/more/AboutMe.vue'
import Help from '../views/more/Help.vue'
import ShareMe from '../views/more/ShareMe.vue'
import Opinion from '../views/more/Opinion.vue'
import Myopinion from '../views/more/Myopinion.vue'
//在线客服
import Serve from '../views/Serve.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import(/* webpackChunkName: "personal" */ '../views/Personal.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  },
  {
    path:'/serve',
    name:'serve',
    component:Serve
  },
  {
    path: '/more',
    name: 'more',
    component: More
  },
  {
    path: '/aboutMe',
    name: 'aboutMe',
    component: AboutMe
  },
  {
    path: '/help',
    name: 'help',
    component: Help
  },
  {
    path: '/shareMe',
    name: 'shareMe',
    component: ShareMe
  },
  {
    path: '/opinion',
    name: 'opinion',
    component: Opinion
  },
  {
    path: '/myopinion',
    name: 'myopinion',
    component: Myopinion
  },
  {
    path: '/play',
    name: 'play',
    component: Play
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:"/",redirect: "/home"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
