<template>
  <div class="info">
    <Header goback="true" msg="个人信息" serve="true" />
    <div class="picture">
      <span class="head logo"></span>
      <span class="name">欢迎您,{{user.name}}</span>
    </div>
    <ul class="default-deatil">
      <li class="have-bottom" >
        <span class="info-fun"  >
          真实姓名
          <span class="write fr"  v-if="!user" @click="goNext('/set/name')">未填写</span>
          <span class="write fr" v-if="user">
          {{user.real_name}}
          </span>
        </span>
        <i></i>
      </li>
      <li class="have-bottom" >
        <span class="info-fun">
          手机号码
          <span class="write fr"  v-if="!user" @click="goNext('/set/phone')">未填写</span>
          <span class="write fr" v-if="user">
          {{user.phone}}
          </span>
        </span>
        <i></i>
      </li>
      <li class="have-bottom">
        <span class="info-fun">
          性别
          <span class="write fr" v-if="!user">未填写</span>
          <span class="write fr" v-if="user">
          {{user.sex==0?'男':"女"}}
          </span>
        </span>
        <i class="icon-next fr"  @click="goNext('/setSex')"></i>
      </li>
      <li class="have-bottom" @click="goNext('/bindCard')">
        <span class="info-fun">
          银行卡号
          <span class="write fr" v-if="!user">未填写</span>
          <span class="write fr" v-if="user">
          {{user.card}}
          </span>
        </span>
        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom" @click="goNext('/choicePsd')">
        <span class="info-fun">
          修改密码
          <!-- <span class="write fr">未填写</span> -->
        </span>
        <i class="icon-next fr"></i>
      </li>
    </ul>
    <button class="logout" @click="getOut()">退出当前账号</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "Info",
  components: {
    Header
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    ...mapActions(["runName"]),
    getOut() {
      sessionStorage.removeItem("user");
      this.runName(null);
      this.$router.push({ path: "/home" });
    },
    goNext(path){
       this.$router.push({ path: path });
    }
  }
};
</script>
<style lang="less">
.info {
  background: #ffffff;
  .picture {
    height: 2.38rem;
    padding: 0.36rem 0 0.33rem 0;
    background: #ffffff;
    margin-bottom: 0.16rem;
    .head {
      display: block;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      margin: auto;
    }
    .name {
      display: block;
      padding-top: 0.16rem;
      font-size: 0.32rem;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      margin: auto;
    }
  }
  .logout {
    width: 5.8rem;
    height: 0.88rem;
    background: @primary;
    border-radius: 10px;
    font-size: 0.3rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    margin: 0.8rem 0.85rem 0 0.85rem;
  }
}
</style>