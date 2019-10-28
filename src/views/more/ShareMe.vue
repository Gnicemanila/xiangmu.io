<template>
  <div class="share-me">
    <Header goback="true" msg="分享本站" />
    <div class="picture">
      <div id="qrcode" ref="qrcode"></div>
    </div>
    <p class="web-info">您可以扫描二维码或输入下方网址</p>
    <p class="web-site">www.xxxxxx.com</p>
    <p class="share">分享到</p>
    <ul>
      <li>
        <i class="friends"></i>
        <span>朋友圈</span>
      </li>
      <li>
        <i class="wechat"></i>
        <span>微信</span>
      </li>
      <li>
        <i class="qq"></i>
        <span>QQ</span>
      </li>
      <li>
        <i class="message"></i>
        <span>短息</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
import QRCode from "qrcodejs2";
export default {
  name: "shareMe",
  components: {
    Header
  },
  methods: {
    qrcode() {
      let qrcode = new QRCode("qrcode", {
        width: 176, // 设置宽度，单位像素
        height: 176, // 设置高度，单位像素
        text: window.location.href // 设置二维码内容或跳转地址
      });
    }
  },
  mounted() {
    this.qrcode(); // 挂载的时候就开始计时，3000ms后消失
  }
};
</script>
<style lang="less">
.share-me {
  background: #ffffff;
  .picture {
    margin: 1.49rem 2.87rem 0.67rem 2.87rem;
    img {
      width: 1.76rem;
      height: 1.76rem;
    }
  }
  .web-site,
  .web-info,
  .share {
    font-size: 0.3rem;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    align-items: center;
  }
  .web-info {
    height: 0.28rem;
  }
  .web-site {
    margin-top: 0.29rem;
    height: 0.17rem;
  }
  .share {
    margin-top: 4.96rem;
  }
  ul {
    margin-top: 0.3rem;
    border-top: 2px solid rgba(215, 215, 215, 1);
    background: rgba(255, 255, 255, 1);
    display: flex;
    height: 1.81rem;
    li {
      width: 25%;
      justify-content: center;
      align-items: center;
      padding-top: .3rem;
      span{
        display: block;
      }
      i {
        display: inline-block;
        width: 0.68rem;
        height: 0.68rem;
        &.friends {
          background: url("../../assets/imgs/more/friends.png") no-repeat;
          background-size: 100%;
        }
        &.wechat {
          background: url("../../assets/imgs/more/wechat.png") no-repeat;
          background-size: 100%;
        }
        &.qq {
          background: url("../../assets/imgs/more/qq.png") no-repeat;
          background-size: 100%;
        }
        &.message {
          background: url("../../assets/imgs/more/message.png") no-repeat;
          background-size: 100%;
        }
      }
    }
  }
}
</style>