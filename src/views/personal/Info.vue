<template>
  <div class="info">
    <Header goback="true" msg="个人信息" serve="true" />
    <div class="picture">
      <span class="head"></span>
      <span class="name">欢迎您,彭于晏</span>
    </div>
    <ul class="details">
      <li>
        <span class="info-fun">真实姓名</span>
        <span class="write fr">未填写</span>
        <i class="icon-next fr"></i>
      </li>
      <li>
        <span class="info-fun">手机号码</span>
        <span class="write fr">未填写</span>
        <i class="icon-next fr"></i>
      </li>
      <li>
        <span class="info-fun">性别</span>
        <span class="write fr">未填写</span>
        <i class="icon-next fr"></i>
      </li>
      <li>
        <span class="info-fun">银行卡号</span>
        <span class="write fr">未填写</span>
        <i class="icon-next fr"></i>
      </li>
      <li>
        <span class="info-fun">修改密码</span>
        <span class="write fr">未填写</span>
        <i class="icon-next fr"></i>
      </li>
    </ul>
    <button class="logout">
        退出当前账号
    </button>
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
      name: state => state.name
    })
  },
  methods: {
    ...mapActions(["runName"])
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
      background: rgba(188, 188, 188, 1);
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
  .details {
    background: #ffffff;
    li {
      padding: 0 0.23rem 0 0.3rem;
      height: 0.88rem;
      border-bottom: 2px solid rgba(245, 245, 245, 1);
      align-items: center;
      display: flex;
      .info-fun {
        display: inline-block;
        width: 100%;
        text-align: left;
        font-size: 0.3rem;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
      .write {
        text-align: right;
        width: 1.16rem;
        margin-right: 0.11rem;
        font-size: 0.28rem;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
  .logout{
        width:5.8rem;
        height:.88rem;
        background:@primary;
        border-radius:10px;
        font-size:.3rem;
font-weight:500;
color:rgba(255,255,255,1);
margin: .80rem .85rem 0 .85rem;
  }
}
</style>