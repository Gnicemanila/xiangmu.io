<template>
  <div class="get-integral">
    <Header goback="true" msg="领取积分" serve="true" />
    <div class="be-careful">
      <van-icon name="info-o" size="20px" />
      <span>
        成功绑定推荐人邀请码可免费获得10元积分，邀请码
        仅能绑定一次。
      </span>
    </div>
    <div class="invitation">
      <span>邀请码：</span>
      <div class="form-input">
        <van-field v-model="num" placeholder="请输入推荐人的邀请码" type="text" />
      </div>
      <!-- <van-icon name="arrow" size="20px" class="fr" /> -->
    </div>

    <button class="btn">绑定邀请码</button>
    <div class="you-up">您的推荐人</div>
    <div class="up">
      <i class="head"></i>
      <div class="content">
        <div class="name">
          <span>彭于晏</span>
          <i class="icon-boy"></i>
          <span class="hot">大V</span>
          <span>粉丝999</span>
          <span>关注999</span>
        </div>
        <div class="time">绑定时间：2019-01-01 00:00:00</div>
      </div>
    </div>
    <div class="foot">
      <p class="tittle">使用说明</p>
      <p>
        1.输入或复制邀请码后，点击“绑定邀请码”按钮进行邀请码
        绑定；
      </p>
      <p>
        2.成功绑定邀请码后可获得积分奖励，自动入账，可在账户
        清单查看；
      </p>
      <p>
        2.成功绑定邀请码后可获得积分奖励，自动入账，可在账户
        清单查看；
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "GetIntegral",
  components: {
    Header
  },
  data() {
    return {
      num: ""
    };
  },
  computed: {
    ...mapState({
      //   name:state=>state.name
    })
  },
  methods: {
    ...mapActions(["runName"])
  }
};
</script>
<style lang="less">
.get-integral {
  background: #ffffff;
  .be-careful {
    width: 100%;
    // height: 0.68rem;
    background: rgba(245, 245, 245, 1);
    padding: 0 0.28rem;
    align-items: center;
    display: flex;
    span {
      padding: 0.1rem;
      text-align: left;
    }
  }
  .invitation {
    display: flex;
    align-items: center;
    height: 0.88rem;
    padding: 0 0.3rem;
    background: #ffffff;
    border-bottom: 1px solid rgba(215, 215, 215, 1);
    .form-input {
      width: 75%;
      .van-cell {
        padding: 0 0.16rem;
      }
    }
  }
  .btn {
    font-size: 0.3rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    width: 5.8rem;
    height: 0.88rem;
    background: @primary;
    border-radius: 0.1rem;
    justify-content: center;
    margin-top: 0.86rem;
  }
  .you-up {
    justify-content: center;
    font-size: 0.3rem;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    padding: 0.78rem 0 0.19rem 0.29rem;
    border-bottom: 2px solid rgba(245, 245, 245, 1);
  }
  .up {
    height: 1.8rem;
    padding: 0.3rem;
    display: flex;
    .head {
      width: 1.2rem;
      height: 1.2rem;
      background: rgba(188, 188, 188, 1);
      border-radius: 50%;
    }
    .content {
      padding-left: 0.24rem;
      .name {
        display: flex;
        width: 100%;
        padding: 0.2rem 0;
        font-size: 0.28rem;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        span {
          margin: 0 0.1rem;
          padding: 0 0.1rem;
          &.hot {
            color: #ffffff;
            background: @primary;
            border-radius: 0.1rem;
          }
        }
        i {
          display: inline-block;
          width: 0.3rem;
          height: 0.3rem;
          &.icon-boy {
            background: url("../../../assets/imgs/personal/boy.png") no-repeat;
            background-size: 100%;
          }
          &.icon-girl {
            background: url("../../../assets/imgs/personal/girl.png") no-repeat;
            background-size: 100%;
          }
        }
      }
      .time {
        text-align: left;
        padding-left: 0.2rem;
      }
    }
  }
  .foot {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 3.56rem;
    width: 100%;
    align-items: center;
    padding: 0 0.4rem;
    text-align: left;
    p {
      margin-bottom: 0.16rem;
    }
    .tittle {
      text-align: center;
    }
  }
}
</style>