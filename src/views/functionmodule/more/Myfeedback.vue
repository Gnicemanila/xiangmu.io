<template>
  <div class="my-feedback">
    <Header goback="true" msg="我的反馈" serve="true" />
    <Me />
    <div class="my-feedback-time">
      <span>2019-01-01 00:00</span>
    </div>
    <Message />
    <div class="my-feedback-time">
      <span>2019-01-01 02:00</span>
    </div>
    <div class="my-feedback-over" v-if="show">
      若问题已经解决，请点击
      <span @click="gameover">已解决</span>
    </div>
    <div class="my-feedback-over" v-if="!show">问题已解决</div>
    <div class="my-feedback-foot" v-if="show">
      <div class="form-input">
        <van-field v-model="value" placeholder="请输入你要反馈的内容" />
      </div>
      <button class="btn">发送</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
import Me from "@/components/Me";
import Message from "@/components/Message";
export default {
  name: "Myfeedback",
  components: {
    Header,
    Me,
    Message
  },
  data() {
    return {
      value: "",
      show: true
    };
  },
  computed: {},
  methods: {
    gameover() {
      this.show = false;
    }
  }
};
</script>
<style lang="less">
.my-feedback {
  &-time {
    border-bottom: 1px solid @primary;
  }
  &-over {
    margin-top: 0.8rem;
    span {
      font-size: 0.3rem;
      font-weight: 500;
      color: @primary;
    }
  }
  &-foot {
    height: 1.36rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.3rem;
    background: #ffffff;
    display: flex;
    .form-input {
      display: inline-block;
      width: 5.5rem;
      height: 0.76rem;
      border: 2px solid rgba(215, 215, 215, 1);
      border-radius: 0.05rem;
      .van-cell {
        padding: 0.1rem 0.16rem;
      }
    }
    .btn {
      display: inline-block;
      width: 1.2rem;
      height: 0.76rem;
      background: @primary;
      border-radius: 0.05rem;
      font-size: 0.3rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      margin-left: 0.2rem;
    }
  }
}
</style>