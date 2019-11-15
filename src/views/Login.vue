<template>
  <div class="login">
    <Header msg="登录" goback="true" serve="true" />
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
        <div class="form-input rgyzm">
          <van-field v-model="code" placeholder="请输入验证码" />
        </div>
        <span class="verification-code fr" @click="getcode">
          <canvas class="rgyzm" id="canvas" width="140" height="40" @click="getcode()"></canvas>
        </span>
      </li>
    </ul>
    <div class="forget-psd fr" @click="goNext('/serve')">忘记密码?</div>
    <button class="submit-btn" @click="gologin()">登录</button>
    <button class="register-btn">
      <router-link to="/register">注册</router-link>
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
import { Toast } from "vant";
export default {
  name: "Login",
  data() {
    return {
      name: "",
      psd: "",
      code: "",
      type: "password",
      verificationCode: "",
      show_psd: false,
      cangetcode: false //放重复点击
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
  created() {
    this.getcode();
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
    goNext(path) {
      this.$router.push({ path: path });
    },
    async gologin() {
      let parameter = {};
      parameter.name = this.name;
      parameter.psd = this.psd;
      parameter.code = this.code;
      let res = await this.$http("/getlogin", parameter, "post");
      if (res.code == 400) {
        let user = {
          id: "9527",
          name: this.name,
          real_name: "胡歌",
          sex: 0,
          phone: "188****8888",
          card: "6222********1234",
          integral: 580,
          coin: 690,
          isBoss: false
        };
        this.runName(user);
        sessionStorage.setItem("user", JSON.stringify(user));
        this.$router.push({ path: "/home" });
      }
    },
    async getcode() {
      if (this.cangetcode) {
        return;
      }
      this.cangetcode = true;
      let res = await this.$http("/getcode");
      if (res.code == 400) {
        let code = Math.random(1000, 9999);
        this.verificationCode = "" + code;
        this.cangetcode = false;
        this.drawPic();
      }
    },
    ...mapActions(["runName"]),
    //绘制验证码图片
    drawPic() {
      let canvas = document.getElementById("canvas");
      let width = canvas.width;
      let height = canvas.height;
      let ctx = canvas.getContext("2d");
      ctx.textBaseline = "bottom";
      /*绘制背景颜色*/
      ctx.fillStyle = "#cccccc";
      ctx.fillRect(0, 0, width, height);
      /*绘制文字*/
      let str = this.verificationCode;
      for (let i = 0; i < 4; i++) {
        let txt = str[i];
        ctx.fillStyle = "#000000"; //随机生成的字体颜色
        ctx.font = this.randomNum(30, 40) + "px SimHei"; //随机生成字体大小
        let x = 10 + i * 25;
        let y = this.randomNum(40, 40);
        let deg = this.randomNum(-10, 10);
        //修改坐标原点合旋转角度
        ctx.translate(x, y);
        ctx.rotate((deg * Math.PI) / 180);
        ctx.fillText(txt, 0, 0);
        //恢复坐标原点和旋转角度
        ctx.rotate((-deg * Math.PI) / 180);
        ctx.translate(-x, -y);
      }
      /**绘制干扰线**/
      for (var i = 0; i < 4; i++) {
        ctx.strokeStyle = this.randomColor(40, 180);
        ctx.beginPath();
        ctx.moveTo(this.randomNum(0, width), this.randomNum(0, height));
        ctx.lineTo(this.randomNum(0, width), this.randomNum(0, height));
        ctx.stroke();
      }
      /**绘制干扰点**/
      for (var i = 0; i < 100; i++) {
        ctx.fillStyle = this.randomColor(0, 255);
        ctx.beginPath();
        ctx.arc(
          this.randomNum(0, width),
          this.randomNum(0, height),
          1,
          0,
          2 * Math.PI
        );
        ctx.fill();
      }
    },
    //验证码
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    //生成一个随机颜色
    randomColor(min, max) {
      let r = this.randomNum(min, max);
      let g = this.randomNum(min, max);
      let b = this.randomNum(min, max);
      return "rgb(" + r + "," + g + "," + b + ")";
    }
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
        &.rgyzm {
          width: 50%;
        }
      }
      .verification-code {
        margin-top: 0.12rem;
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