<template>
  <div :class="{'home':true, 'iphonex':iphonex}">
    <Header left="会员" msg="武汉交友群" serve="true" v-if="user" />
    <Header left="游客" msg="武汉交友群" serve="true" v-if="!user" />
    <div class="home-body">
      <div class="swipe">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(item,i) in img" :key="i">
            <img :src="item" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="news">
        <div class="notice">
          <span class="notice-ico fl"></span>
          <van-notice-bar
            text="爱情就像在海滩上捡贝壳，不要捡最大的，也不要捡最漂亮的，要捡就捡自己最喜欢的，最重要的是捡到了自己喜欢的 就永远不要再去海边了。"
            background="#ffffff"
            color="#333333"
          />
        </div>
        <ul class="news-deatil">
          <li class="win-1" @click="goNext('/hotList/1')">
            <div class="header">视频榜</div>
            <div class="content">好玩的 好看的</div>
            <div class="count">当前参与人数：123456</div>
          </li>
          <li class="win-2" @click="goNext('/hotList/2')">
            <div class="header">音乐榜单</div>
            <div class="content">一展歌喉 沉醉其中</div>
            <div class="count">当前参与人数：30269</div>
          </li>
          <li class="win-3" @click="goNext('/hotList/3')">
            <div class="header">热搜榜单</div>
            <div class="content">国际热点 国内热点</div>
            <div class="count">当前参与人数：3659</div>
          </li>
          <li class="win-4" @click="goNext('/hotList/4')">
            <div class="header">网站活跃榜单</div>
            <div class="content">话题多，粉丝多</div>
            <div class="count">当前参与人数：9999</div>
          </li>
        </ul>
      </div>
      <div class="video-content">
        <div class="video-swipe">
          <div class="tittle">
            <div class="head-message">武汉头条</div>
            <ul class="content">
              <li @click="goNext('/article')">光谷房价暴跌</li>
              <li @click="goNext('/article')">江汉路改名韩红江路</li>
            </ul>
          </div>
          <van-swipe :loop="false" :width="300" :autoplay="3000">
            <van-swipe-item v-for="(item,i) in video" :key="i">
              <img :src="item" />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="tourist" v-if="!user">
        <button>
          <router-link to="/login">登录</router-link>
        </button>
        <button>
          <router-link to="/register">注册</router-link>
        </button>
      </div>
      <div v-if="user">
        <FansLike />
      </div>
    </div>
    <Footer message="首页" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FansLike from "@/components/FansLike";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    FansLike
  },
  mounted() {
    var u = navigator.userAgent;
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isIOS) {
      if (screen.height == 812 && screen.width == 375) {
        this.iphonex = true;
      } else {
        this.iphonex = false;
      }
    }
  },
  data() {
    return {
      img:[
        "https://img.yzcdn.cn/vant/apple-5.jpg",
        "https://img.yzcdn.cn/vant/apple-6.jpg",
        "https://img.yzcdn.cn/vant/apple-7.jpg",
        "https://img.yzcdn.cn/vant/apple-8.jpg",
      ],
      video: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg",
        "https://img.yzcdn.cn/vant/apple-4.jpg"
      ],
      active: false,
      iphonex: false
    };
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  mounted() {
    var u = navigator.userAgent;
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isIOS) {
      if (screen.height == 812 && screen.width == 375) {
        this.iphonex = true;
      } else {
        this.iphonex = false;
      }
    }
  },
  methods: {
    goNext(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>

<style lang="less">
.home {
  padding-bottom: 0.98rem;
  &.iphonex {
    padding-bottom: 1.66rem;
  }
  .info {
    margin-left: 0.19rem;
  }
  .swipe {
    height: 2.76rem;
    margin-top: 0.02rem;
    img {
      height: 2.76rem;
      width: 100%;
    }
  }
  .news {
    height: 3.9rem;
    padding: 0 0.3rem;
    background: #ffffff;
    margin: 0.1rem 0;
    .notice {
      height: 0.72rem;
      justify-content: center;
      .notice-ico {
        margin-top: 0.17rem;
      }
      .van-notice-bar {
        padding: 0;
        height: 0.72rem;
      }
    }
    .news-deatil {
      li {
        display: inline-block;
        width: 3.36rem;
        height: 1.5rem;
        padding: 0.23rem 0.18rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        &.win-2 {
          margin-left: 0.18rem;
        }
        &.win-3 {
          margin: 0.18rem 0.18rem 0 0;
        }
        &.win-4 {
          margin-top: 0.18rem;
        }
        .header {
          font-size: 0.34rem;
        }
        .content {
          font-size: 0.24rem;
        }
        .count {
          font-size: 0.2rem;
        }
      }
    }
  }
  .tourist {
    height: 1.82rem;
    padding: 0 0.2rem;
    background: #ffffff;
    button {
      height: 0.9rem;
      width: 100%;
      font-size: 0.3rem;
      font-weight: bold;
      a {
        color: rgba(51, 51, 51, 1);
      }
      background: #ffffff;
      &:first-child {
        border-bottom: 2px solid rgba(245, 245, 245, 1);
      }
    }
  }
  .video-content {
    margin-top: 0.16rem;
    height: 4.26rem;
    // background: #ffffff;
    .tittle {
      height: 1.26rem;
      display: flex;
      padding: 0.3rem 0.3rem 0.29rem 0.3rem;
      align-items: center;
      .head-message {
        width: 1.57rem;
        display: inline-block;
        border-right: 1px solid rgba(215, 215, 215, 1);
        text-align: left;
        font-size: 0.36rem;
        font-weight: 800;
        color: rgba(51, 51, 51, 1);
      }
      .content {
        display: inline-block;
        width: 5.31rem;
        padding-left: 0.16rem;
        li {
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &:first-child {
            border-bottom: 2px solid rgba(245, 245, 245, 1);
          }
        }
      }
    }
    .video-swipe {
      height: 3rem;
      img {
        width: 5rem;
        height: 3rem;
        border-radius: 0.05rem;
      }
    }
  }
}
</style>
