<template>
  <div class="chat">
    <div class="notice">
    <Header msg="聊天室" serve="true" />
    <div class="notice-nav">
                <van-notice-bar
      mode="closeable"
      text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
      background="#ECECEC"
      color="#333333"
    ></van-notice-bar>
    </div>
    </div>
    <div class="content">
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    </div>
    <div class="chat-bottom">
      <div class="chat-function">
        <i class="chat-btn-func"></i>
        <i class="chat-btn-emoji"></i>
        <i class="chat-btn-voice"></i>
        <div class="chat-content">
          <van-field v-model="message" rows="1" type="textarea" />
        </div>
        <span class="send">发送</span>
      </div>
      <Footer message="聊天室" />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Message from "@/components/Message";
import { mapState, mapActions } from "vuex";
export default {
  name: "chat",
  components: {
    Footer,
    Header,
    Message
  },
  data() {
    return {
    message:"",
    };
  },
  computed: {
    ...mapState({
      name: state => state.name
    })
  },
  methods: {
    ...mapActions(["runName"]),
  }
};
</script>
<style lang="less">
.chat {
  padding-bottom: 1.98rem;
  .notice{
 
    .notice-nav{
      height:.88rem;
      .van-notice-bar{
            position: fixed;
    left: 0;
    right: 0;
    z-index: 2;
      }
    }
  }
  .chat-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 1px 0 0 rgba(45, 45, 45, 0.21);
    border-top: 1px solid #c2c3c7;
    background: #fff;
    height: 1.98rem;
    .chat-function {
      height: 1rem;
      background: #fff;
      display: flex;
      align-items: center;
      i {
        width: 0.48rem;
        height: 0.48rem;
        &.chat-btn-func {
          margin-left: 0.3rem;
          background: url("../assets/imgs/chat/function.png") no-repeat;
          background-size: 100%;
        }
        &.chat-btn-emoji {
          margin-left: 0.39rem;
          background: url("../assets/imgs/chat/emoji.png") no-repeat;
          background-size: 100%;
        }
        &.chat-btn-voice {
          margin-left: 0.36rem;
          width: 0.33rem;
          background: url("../assets/imgs/chat/voice.png") no-repeat;
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
  }
}
</style>