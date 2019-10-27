<template>
  <div class="login">
    <Header msg="登录" goback="true" serve="true"/>
    <ul class="form-info">
      <li>
        <span class="form-name"></span>
        <div class="form-input">
          <van-field v-model="name" placeholder="请输入用户名" />
        </div>
      </li>
      <li>
        <span class="form-psd"></span>
        <div class="form-input">
          <van-field v-model="psd" placeholder="请输入密码" :type="type" />
        </div>
        <span
          :class="{'form-show-psd fr':show_psd,'form-hide-psd fr':!show_psd,}"
          @click="changeType"
        ></span>
      </li>
      <li>
        <span class="form-verification"></span>
        <div class="form-input">
          <van-field v-model="code" placeholder="请输入验证码" />
        </div>
        <span class="verification-code fr">8978</span>
      </li>
    </ul>
    <div class="forget-psd fr">忘记密码?</div>
    <button class="submit-btn" @click="goHome()">登录</button>
    <button class="register-btn">
      <router-link to="/register">注册</router-link>
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "Login",
  data() {
    return {
      name: "",
      psd: "",
      code: "",
      type: "password",
      show_psd: false
    };
  },
  components: {
    Header
  },
  computed: {
    ...mapState({
      //   name:state=>state.name
    })
  },
  methods: {
    changeType() {
      this.show_psd = !this.show_psd;
      if (this.show_psd) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
    goHome(){
        this.runName(true);
        this.$router.push({ path: '/home' })
    },
    ...mapActions(['runName'])
  }
};
</script>
<style lang="less">
.login {
  background: #ffffff;
  .form-info {
    padding: 0 0.3rem;
    li {
      height: 1.1rem;
      border-bottom: 1px solid rgba(215, 215, 215, 1);
      display: flex;
      align-items: center;
      .form-input {
        width: 85%;
      }
    }
  }
  .forget-psd {
    padding: 0.38rem 0.3rem 0 0.3rem;
    height: 0.9rem;
    width: 100%;
    font-size: 0.28rem;
    font-weight: 500;
    text-align: right;
    color: rgba(102, 102, 102, 1);
    background: #ffffff;
  }
  button {
    padding: 0 0.3rem;
    width: 6.9rem;
    height: 0.88rem;
    background: @primary;
    border-radius: 0.1rem;
    &.submit-btn {
      font-size: 0.3rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
    &.register-btn {
      margin-top: 0.58rem;
      font-size: 0.3rem;
      font-weight: 500;
      a {
        color: @primary;
      }
      background: #ffffff;
      border: 1px solid @primary;
      border-radius: 0.1rem;
    }
  }
}
</style>