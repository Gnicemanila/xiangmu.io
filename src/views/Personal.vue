<template>
  <div class="personal">
      <Header msg="个人中心" serve="true"/>
    <ul class="head-portrait" @click="goNext('/info')">
      <div class="head logo"></div>
      <ul>
        <li>{{user.name}}</li>
        <li>
          <span class="fans">粉丝N</span>
          <span class="like">关注N</span>
        </li>
        <li>
          <span class="point">积分：{{user.integral}}</span>
          <span class="coin">金币：{{user.coin}}</span>
        </li>
      </ul>
      <i class="icon-next fr"></i>
    </ul>
    <ul class="all-function">
      <li v-show="user.isBoss">
        <i class="i-function icon-boss"></i>
        <span>申请成为大V</span>
        <i class="icon-next fr"></i>
      </li>
            <li v-show="!user.isBoss">
        <i class="i-function icon-my-send"></i>
        <span>我的发布</span>
        <i class="icon-next fr"></i>
      </li>
      <li class="make-money" @click="goNext('/makeMoney')">
        <i class="i-function icon-make-money"></i>
        <span>我要赚钱</span>
        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom">
        <i class="i-function icon-integral"></i>
        <span>积分充值/兑换</span>
        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom">
        <i class="i-function icon-gold_coin"></i>
        <span>金币提现</span>
        <i class="icon-next fr"></i>
      </li>
      <li>
        <i class="i-function icon-bill"></i>
        <span>账户清单</span>
        <i class="icon-next fr"></i>
      </li>

    </ul>
    <FansLike />
      <div class="message">
      <i class="i-function icon-message"> </i>
        <span>站内信</span>
        <i class="icon-next fr"></i>
      </div>
    <Footer message="个人中心" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FansLike from "@/components/FansLike";
export default {
  name: "Personal",
  components: {
    Header,
    Footer,
    FansLike
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    ...mapActions(["runName"]),
    goNext(path){
       this.$router.push({ path: path })
    }
  }
};
</script>
<style lang="less">
.personal {
  .header{
    height: .88rem;
  }
  .head-portrait {
    background: #ffffff;
    height: 2.28rem;
    padding: 0.54rem 0.33rem 0.54rem 0.49rem;
    display: flex;
    .head {
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
    }
    ul {
      width: 5.18rem;
      padding-left: 0.26rem;
      li {
        text-align: left;
        &:first-child {
          font-size: 0.3rem;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
        }
        .fans {
          display: inline-block;
          font-size: 0.24rem;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          margin-right: 0.55rem;
        }
        .like {
          display: inline-block;
          font-size: 0.24rem;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
        }
        .point {
          font-size: 0.22rem;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
          margin-right: 0.64rem;
        }
        .coin {
          font-size: 0.22rem;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
        }
      }
    }
    .icon-next {
      margin-top: 0.54rem;
    }
  }
  .all-function {
    margin: 0.16rem 0;
    li {
      height: 0.88rem;
      padding: 0 0.23rem 0 0.3rem;
      align-items: center;
      background: #ffffff;
      font-size: 0.3rem;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      display: flex;
      &.have-bottom{
        border-bottom: 2px solid rgba(245,245,245,1);
      }
      span {
        display: inline-block;
        width: 100%;
        padding-left: 0.4rem;
        text-align: left;
      }
      &.make-money {
        margin: 0.16rem 0;
      }
      .i-function {
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        &.icon-boss {
          background: url("../assets/imgs/personal/boss.png") no-repeat;
          background-size:100%;
        }
        &.icon-my-send{
                    background: url("../assets/imgs/personal/my_send.png") no-repeat;
          background-size:100%;
        }
        &.icon-make-money {
          background: url("../assets/imgs/personal/make_money.png") no-repeat;
          background-size:100%;
        }
        &.icon-integral {
          background: url("../assets/imgs/personal/integral.png") no-repeat;
           background-size:100%;
        }
        &.icon-gold_coin {
          background: url("../assets/imgs/personal/gold_coin.png") no-repeat;
           background-size:100%;
        }
        &.icon-bill {
          background: url("../assets/imgs/personal/bill.png") no-repeat;
          background-size:100%;
        }

      }
    }
  }
  .message{
          height: 0.88rem;
      padding: 0 0.3rem;
      align-items: center;
      background: #ffffff;
      font-size: 0.3rem;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      display: flex;
      margin-top: .16rem;
        span{
            width: 100%;
            padding-left: .4rem;
            text-align: left;
        }
        .i-function {
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
                &.icon-message {
          background: url("../assets/imgs/personal/message.png") no-repeat;
          background-size:100%;
        }
        }
  }
}
</style>