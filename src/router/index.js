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
import Chat from '../views/functionmodule/chat/Chat.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Personal from '../views/Personal.vue'
import WeiBo from '../views/WeiBo.vue'
//makemoney功能模块的
import MakeMoney from '../views/functionmodule/makemoney/MakeMoney.vue'
import MyNum from '../views/functionmodule/makemoney/MyNum.vue'
import GetIntegral from '../views/functionmodule/makemoney/GetIntegral.vue'
import MyPartner from '../views/functionmodule/makemoney/MyPartner.vue'
//热门模块
import HotList from '../views/functionmodule/hotlist/HotList.vue'
//粉丝和我的关注
import FansAndLike from '../views/functionmodule/fanslike/FansAndLike.vue'
//我的发布
import MySay from '../views/functionmodule/mysay/MySay.vue'
//发表说说
import SayOther from '../views/functionmodule/mysay/SayOther.vue'
//获取位置
import Position from '../views/functionmodule/mysay/Position.vue'
//首页文章相关跳转

import Article from '../views/functionmodule/article/Article.vue'
//关于金钱系统的积分充值兑换
import Integral from '../views/functionmodule/integral/Integral.vue'
//关于支付界面
import Pay from '../views/functionmodule/pay/Pay.vue'
//积分兑换
import Exchange from '../views/functionmodule/exchange/Exchange.vue'
//金币兑现
import Goldcoin from '../views/functionmodule/exchange/Goldcoin.vue'
//账户清单
import Account from '../views/functionmodule/account/Account.vue'
//站内信息
import Mail from '../views/functionmodule/mail/Mail.vue'
//站内信详情
import MailMessage from '../views/functionmodule/mail/MailMessage.vue'
//更多关于系统的
import More from '../views/functionmodule/more/More.vue'
import AboutMe from '../views/functionmodule/more/AboutMe.vue'
import Help from '../views/functionmodule/more/Help.vue'
import HelpDeatil from '../views/functionmodule/more/HelpDeatil.vue'
import ShareMe from '../views/functionmodule/more/ShareMe.vue'
import Opinion from '../views/functionmodule/more/Opinion.vue'
import Myopinion from '../views/functionmodule/more/Myopinion.vue'
import Myfeedback from '../views/functionmodule/more/Myfeedback'
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
    path: '/weiBo',
    name: 'weiBo',
    component: WeiBo
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
    path: '/pay',
    name: 'pay',
    component: Pay
  },
  {
    path: '/exchange',
    name: 'exchange',
    component: Exchange
  },
  {
    path: '/goldcoin',
    name: 'goldcoin',
    component: Goldcoin
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/mail',
    name: 'mail',
    component: Mail
  },
  {
    path: '/mailMessage/:id',
    name: 'mailMessage',
    component: MailMessage
  },
  {
    path: '/myPartner',
    name: 'myPartner',
    component: MyPartner
  },
  {
    path: '/hotList/:type',
    name: 'hotList',
    component: HotList
  },
  {
    path: '/fansAndLike/:type',
    name: 'fansAndLike',
    component: FansAndLike
  },
  {
    path: '/mySay',
    name: 'mySay',
    component: MySay
  },
  {
    path: '/sayOther',
    name: 'sayOther',
    component: SayOther
  },
  {
    path: '/position',
    name: 'position',
    component: Position
  },
  {
    path: '/article',
    name: 'article',
    component: Article
  },
  {
    path: '/integral',
    name: 'integral',
    component: Integral
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
    path: '/helpDeatil/:type',
    name: 'helpDeatil',
    component: HelpDeatil
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
    path: '/myfeedback',
    name: 'myfeedback',
    component: Myfeedback
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

const blackList = ['/home', '/play', '/chat', '/register','/serve'] // 路由白名单不需要登录的界面

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
