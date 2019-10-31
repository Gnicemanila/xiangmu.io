import Vue from 'vue'
import VueRouter from 'vue-router'
//更多关于个人中心的Info
import Info from '../views/functionmodule/info/Info.vue'
import Set from '../views/functionmodule/info/Set.vue'
import SetSex from '../views/functionmodule/info/SetSex.vue'
import BindCard from '../views/functionmodule/info/BindCard.vue'
import ChoicePsd from '../views/functionmodule/info/ChoicePsd.vue'
//主功能
import Play from '../views/Play.vue'
import Chat from '../views/Chat.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Personal from '../views/Personal.vue'
//makemoney功能模块的
import MakeMoney from '../views/functionmodule/makemoney/MakeMoney.vue'
import MyNum from '../views/functionmodule/makemoney/MyNum.vue'
import GetIntegral from '../views/functionmodule/makemoney/GetIntegral.vue'
import MyPartner from '../views/functionmodule/makemoney/MyPartner.vue'
//更多关于系统的
import More from '../views/More.vue'
import AboutMe from '../views/more/AboutMe.vue'
import Help from '../views/more/Help.vue'
import ShareMe from '../views/more/ShareMe.vue'
import Opinion from '../views/more/Opinion.vue'
import Myopinion from '../views/more/Myopinion.vue'
//在线客服
import Serve from '../views/Serve.vue'
//
import About from '../views/About.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/personal',
    name: 'personal',
    component: Personal
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  },
  {
    path: '/set/:type',
    name: 'set',
    component: Set
  },
  {
    path: '/setSex',
    name: 'setSex',
    component: SetSex
  },
  {
    path: '/bindCard',
    name: 'bindCard',
    component: BindCard
  },
  {
    path: '/choicePsd',
    name: 'choicePsd',
    component: ChoicePsd
  },
  {
    path: '/makeMoney',
    name: 'makeMoney',
    component: MakeMoney
  },
  {
    path: '/myNum',
    name: 'myNum',
    component: MyNum
  },
  {
    path: '/getIntegral',
    name: 'getIntegral',
    component: GetIntegral
  },
  {
    path: '/myPartner',
    name: 'myPartner',
    component: MyPartner
  },
  {
    path: '/serve',
    name: 'serve',
    component: Serve
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
    component: About
  }, {
    path: '/',
    redirect: '/home'
  }
]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.PUBLIC_PATH,
  routes
})

const blackList = ['/home', '/play', '/chat', '/register', '/more'] // 路由白名单不需要登录的界面

router.beforeEach((to, from, next) => {
  // console.log('进入守卫');
  const flag = window.sessionStorage.getItem('user');; //鉴权
  if (flag) {
    next();
    return  //以下的代码不执行
  } else {
    if (blackList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()//记得当所有程序执行完毕后要进行next()，不然是无法继续进行的;
    } else if (to.path == '/login') {
      next();
    } else {
      next('/login');
    }
  }

})


export default router
