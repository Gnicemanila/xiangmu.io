<template>
  <div class="register">
    <Header msg="注册" goback="true" serve="true" />
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
          <van-field v-model="psd" placeholder="请输入密码" type="password" />
        </div>
      </li>
      <li>
        <span class="form-psd"></span>
        <div class="form-input">
          <van-field v-model="psd_two" placeholder="请再一次输入您的密码" type="password" />
        </div>
      </li>
      <li>
        <span class="form-phone"></span>
        <div class="form-input">
          <van-field v-model="phone" placeholder="请输入11位手机号码" type="number" />
        </div>
        <span class="get-code fr" v-if="!show" @click="getphonecode()">获取验证码</span>
        <span class="get-code fr" v-if="show">
          <van-count-down :time="time">
            <template v-slot="timeData">
              <span class="item">{{ timeData.seconds }}获取中</span>
            </template>
          </van-count-down>
        </span>
      </li>
      <li>
        <span class="form-message"></span>
        <div class="form-input">
          <van-field v-model="message" placeholder="请输入您收到的短信验证码" type="number" />
        </div>
      </li>
      <li v-if="have_invitation" class="have-invitation">
        <span class="form-invitation"></span>
        <div class="form-input">
          <van-field v-model="invitation" placeholder="请输入邀请码" type="number" />
        </div>
      </li>
    </ul>
    <div class="have-invitation-code fr" @click="haveInvitation()" v-if="!have_invitation">我有注册邀请码</div>

    <button class="submit-btn" @click="goregister">注册并登录</button>
    <button class="go-login-btn">
      <router-link to="/login">
        已有账号？
        <span>登录</span>
      </router-link>
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      psd: "",
      psd_two: "",
      code: "",
      phone: "",
      message: "",
      invitation: "",
      have_invitation: false,
      verificationCode: "",
      show: false,
      time: 60000
    };
  },
  components: {
    Header
  },
  computed: {
    ...mapState({
      // name1: state => state.chat.name
    })
  },
  methods: {
    ...mapActions(["runName"]),
    haveInvitation() {
      this.have_invitation = true;
    },
    async getphonecode() {
      let res = await this.$http("/getphonecode");
      if (res.code == 400) {
        // console.log(res)
        this.show = true;
        let _this = this;
        setTimeout(function() {
          _this.show = false;
        }, 60000);
        this.verificationCode = "456789";
      }
    },
    async goregister() {
      let parameter = {};
      parameter.name = this.name;
      parameter.psd = this.psd;
      parameter.phone = this.phone;
      let res = await this.$http("/register", parameter, "post");
      if (res.status == 200) {
        console.log(res);
        this.runName(res.data);
        sessionStorage.setItem("user", JSON.stringify(res.data));
        this.$router.push({ path: "/home" });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.register {
  background: #ffffff;
  .form-info {
    padding: 0 0.3rem;
    li {
      height: 1.1rem;
      border-bottom: 1px solid rgba(215, 215, 215, 1);
      display: flex;
      align-items: center;
      &.have-invitation {
        margin-bottom: 0.7rem;
      }
      .form-input {
        width: 70%;
      }
      .get-code {
        font-size: 0.28rem;
        font-weight: 500;
        color: #ffffff;
        background: @primary;
        width: 1.8rem;
        height: 0.58rem;
        line-height: 0.58rem;
        border-radius: 0.05rem;
        .van-count-down,
        .van-divider {
          line-height: 0.58rem;
          color: #ffffff;
        }
      }
    }
  }
  .have-invitation-code {
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
    &.go-login-btn {
      margin-top: 0.58rem;
      font-size: 0.3rem;
      font-weight: 500;
      a {
        color: @primary;
        span {
          color: #2993ec;
        }
      }
      background: #ffffff;
      border: 1px solid @primary;
      border-radius: 0.1rem;
    }
  }
}
</style>