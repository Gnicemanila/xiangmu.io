<template>
  <div class="chat">
    <div class="notice">
      <Header goback="true" msg="聊天室" serve="true" />
      <div class="notice-nav">
        <div class="notice-nav-text">
          <van-notice-bar
            text="爱情就像在海滩上捡贝壳，不要捡最大的，也不要捡最漂亮的，要捡就捡自己最喜欢的，最重要的是捡到了自己喜欢的 就永远不要再去海边了。"
            background="#ECECEC"
            color="#333333"
          ></van-notice-bar>
        </div>
      </div>
    </div>
    <div :class="{'wrapper':true,'iphonex':iphonex}" ref="wrapper">
      <div class="content">
        <div v-for="(item,i) in chatList" :key="i">
          <Message :list="item" v-if="!item.isme" />
          <Me :list="item" v-if="item.isme" />
        </div>
      </div>
      <div class="loading-hook"></div>
      <div class="loading-down"></div>
    </div>
    <div class="chat-bottom">
      <div class="chat-function">
        <i class="chat-btn-func"></i>
        <i class="chat-btn-emoji" @click="showEmoji"></i>
        <i class="chat-btn-voice"></i>
        <div class="chat-content">
          <van-field v-model="message" rows="1" type="textarea" />
        </div>
        <span class="send" @click="send()">发送</span>
      </div>
      <ul v-if="show_emoji" class="chat-emoji-content">
        <van-swipe>
          <van-swipe-item v-for="(item,index) in list" :key="index">
            <li v-for="(emoji,i) in item" :key="i" @click="addMessage(emoji)">{{emoji}}</li>
          </van-swipe-item>
        </van-swipe>
      </ul>
      <Footer message="聊天室" />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Message from "@/components/Message";
import Me from "@/components/Me";
import { mapState, mapActions } from "vuex";
import { getElementViewTop } from "../../../api/publicFuction";
import BScroll from "@better-scroll/core";
import PullDown from "@better-scroll/pull-down";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);
BScroll.use(PullDown);
const emojiDefault = "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😛 😝 😜 😗 🤓 😎 😵 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😢 😭 😤 😠 😡 😳 😱 😨 😰 😥 😓 🤗 🤔 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 😴 🤤 😪 😵 🤐 🤢 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 🐣 🐔 💪 ✨ 🔔 ✊ ✋ 👇 👊 👍 👈 👆 💛 👐 👎 👌 💘".split(
  " "
);
export default {
  name: "Chat",
  components: {
    Footer,
    Header,
    Message,
    Me
  },
  data() {
    return {
      message: "",
      chatList: [],
      iphonex: false,
      show_emoji: false,
      list: [] //表情
    };
  },
  // beforeCreate() {},
  created() {
    let emojilist = [];
    let itemSum = 26;
    let len = Math.ceil(emojiDefault.length / 26);
    for (let i = 0; i < len; i++) {
      let item = [];
      for (let k = 0; k < 26; k++) {
        item.push(emojiDefault[itemSum * i + k]);
      }
      item.push("x");
      emojilist.push(item);
    }
    this.list = emojilist;
    this.loadData();
    document.addEventListener("keydown", this.onKeyDown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.onKeyDown); //卸载绑定事件
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
    send() {
      if (!this.message) {
        return;
      }
      let say = {
        name: this.user.name,
        avatar: "2",
        vip: "1",
        time: "20:13:38",
        message: this.message,
        isme: true
      };
      this.chatList.push(say);
      this.message = "";
      // this.scrollToBottom()
      this.$nextTick(() => {
        this.scroll.refresh();
        this.scroll.scrollTo(0, this.scroll.maxScrollY, 100);
      });
    },
    onKeyDown(e) {
      if (e.keyCode == 13 && !e.shiftKey) {
        this.send();
      }
    },
    loadData() {
      var self = this;
      let parameter = {};
      this.$http("/getchatlist", parameter, "post").then(res => {
        this.chatList = res.data.concat(this.chatList);
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.wrapper, {
              pullUpLoad: {
                threshold: -30 // 负值是当上拉到超过低部 30px；正值是距离底部距离时，
              },
              pullDownRefresh: {
                threshold: 50
              }
            });
            this.scrollToBottom();
          } else {
            this.scroll.refresh();
          }
        });
      });
    },
    scrollToBottom(time = 1000) {
      this.scroll.scrollTo(0, this.scroll.maxScrollY, time);
    },
    showEmoji() {
      this.show_emoji = !this.show_emoji;
    },
    addMessage(item) {
      if (item == "x") {
        //emoji占2个字符，普通文字占一个字符，网上方法判断是否emoji不全，有些emoji不会判断成为emoji
        let value = this.message;
        let number = 1;
        if (emojiDefault.indexOf(value.slice(-2)) !== -1) {
          //最后两位是emoji
          number = 2;
        }
        this.message = value.substr(0, value.length - number);
      } else {
        this.message += item;
      }
    }
  }
};
</script>
<style lang="less">
.chat {
  .notice {
    .notice-nav {
      height: 0.88rem;
      &-text {
        .van-notice-bar {
          position: fixed;
          left: 0;
          right: 0;
          z-index: 2;
        }
      }
    }
  }
  .wrapper {
    top: 1.76rem;
    bottom: 1.96rem;
    width: 100%;
    position: absolute;
    left: 0;
    overflow: hidden;
    &.iphonex {
      bottom: 2.64rem;
    }
    .content {
      position: relative;
    }
    .loading-down {
      position: absolute;
      top: 0rem;
      left: 40%;
    }
    .loading-hook {
      position: absolute;
      bottom: 0rem;
      left: 40%;
    }
  }
  .chat-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 1px 0 0 rgba(45, 45, 45, 0.21);
    border-top: 1px solid #c2c3c7;
    background: #f6f6f6;
    .footer {
      position: relative;
    }
    .chat-function {
      height: 0.98rem;
      background: #fff;
      display: flex;
      align-items: center;
      i {
        width: 0.48rem;
        height: 0.48rem;
        &.chat-btn-func {
          margin-left: 0.3rem;
          background: url("../../../assets/imgs/chat/function.png") no-repeat;
          background-size: 100%;
        }
        &.chat-btn-emoji {
          margin-left: 0.39rem;
          background: url("../../../assets/imgs/chat/emoji.png") no-repeat;
          background-size: 100%;
        }
        &.chat-btn-voice {
          margin-left: 0.36rem;
          width: 0.33rem;
          background: url("../../../assets/imgs/chat/voice.png") no-repeat;
          background-size: 100%;
        }
      }
      .chat-content {
        display: inline-block;
        margin-left: 0.1rem;
        width: 3.8rem;
        height: 0.68rem;
        border: 1px solid #d9d9db;
        border-radius: 0.32rem;
        padding: 0.1rem 0.2rem;
        .van-cell {
          padding: 0;
          .van-field__control {
            min-height: 0;
          }
        }
      }
      .send {
        font-size: 0.3rem;
        margin-left: 0.25rem;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
    }
    .chat-emoji-content {
      height: 3.3rem;
      width: 100%;
      li {
        height: 1rem;
        width: 0.8rem;
        display: inline-block;
        justify-content: center;
        align-items: center;
        font-size: 0.5rem;
      }
    }
  }
}
</style>