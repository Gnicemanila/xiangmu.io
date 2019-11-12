<template>
  <div class="footer">
      <ul class="footer-function">
    <li v-bind:class="{ active: this.message=='首页' }">
      <i class="icon_home"></i>
      <router-link to="/home">首页</router-link>
    </li>
    <li v-bind:class="{ active: this.message=='个人中心' }">
      <i class="icon_personal"></i>
      <router-link to="/personal">个人中心</router-link>
    </li>
    <li v-bind:class="{ active: this.message=='聊天室' }">
      <i class="icon_chat"></i>
      <router-link to="/chat">聊天室</router-link>
    </li>
    <li v-bind:class="{ active: this.message=='活动' }">
      <i class="icon_play"></i>
      <router-link to="/play">活动</router-link>
    </li>
    <li v-bind:class="{ active: this.message=='动态' }">
      <i class="icon_weibo"></i>
      <router-link to="/weiBo">动态</router-link>
    </li>
  </ul>
  <div class="jianrong" v-if="phone">

  </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["message"],
  data(){
    return {
      phone:false
    }
  },
  methods: {},
    mounted(){
    var u = navigator.userAgent;
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端    
      if (isIOS) {    	
        if (screen.height == 812 && screen.width == 375){
    	   this.phone=true
        }else{
         this.phone=false
        } 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .footer{
      position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
    .footer-function {
  display: flex;
  height: .98rem;
  background: rgba(245, 245, 245, 1);
  li {
    width: 20%;
    justify-content: center;
    align-items: center;
    i {
      display: block;
      margin:0.1rem auto 0.059rem;
      width: 0.4rem;
      height: 0.4rem;
      &.icon_home {
        background: url("../assets/imgs/home/home.png") no-repeat;
        background-size: 0.4rem 0.4rem;
      }
      &.icon_play {
        background: url("../assets/imgs/home/play.png") no-repeat;
        background-size: 0.4rem 0.4rem;
      }
      &.icon_personal {
        background: url("../assets/imgs/home/personal.png") no-repeat;
        background-size: 0.4rem 0.4rem;
      }
      &.icon_weibo {
        background: url("../assets/imgs/home/weibo.png") no-repeat;
        background-size: 0.4rem 0.4rem;
      }
      &.icon_chat {
        background: url("../assets/imgs/home/chat.png") no-repeat;
        background-size: 0.4rem 0.4rem;
      }
    }
    a {
      color: #333333;
    }
    &.active {
      .icon_home {
        background: url("../assets/imgs/home/home_active.png") no-repeat;
        background-size: 0.4rem 0.4rem;
      }
      .icon_play {
        background: url("../assets/imgs/home/play_active.png") no-repeat;
        background-size: 0.4rem 0.4rem;
      }
      .icon_personal {
        background: url("../assets/imgs/home/personal_active.png") no-repeat;
        background-size: 0.4rem 0.4rem;
      }
      &.icon_weibo {
        background: url("../assets/imgs/home/weibo_active.png") no-repeat;
        background-size: 0.4rem 0.4rem;
      }
      .icon_chat {
        background: url("../assets/imgs/home/chat_active.png") no-repeat;
        background-size: 0.4rem 0.4rem;
      }
      a {
        color: @primary;
      }
    }
  }
}
.jianrong{
  height: .68rem;
  width: 100%;
  background: rgba(245, 245, 245, 1);
}
  }
</style>
