<template>
  <div class="exchange">
    <Header goback="true" msg="兑换积分" serve="true" />
    <ul class="exchange-user">
      <li class="have-bottom">
        <span class="name">账户当前金币:</span>
        <span class="fr">999999</span>
      </li>
      <li>
        <span class="name">账户当前积分：</span>
        <span class="fr">999999</span>
      </li>
    </ul>
    <div class="exchange-change">
      <div class="exchange-change-name">金币兑换积分</div>
      <div class="exchange-change-money">
        <span class="exchange-change-money-title">兑换金额：</span>
        <div class="pay-form">
          <van-field v-model="num" placeholder="请输入兑换积分数" />
        </div>
      </div>
      <div class="exchange-change-lose">
        <span>消耗金币：</span>
        <span class="num">230</span>
      </div>
    </div>
    <div class="exchange-submit">
      <div class="remind">温馨提示：当金币数量达到100个时，方可兑换积分。1个金币=1积分。</div>
      <button class="btn">提交</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "Exchange",
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
      name: state => state.name
    })
  },
  methods: {
    ...mapActions(["runName"])
  }
};
</script>
<style lang="less">
.exchange {
  &-user {
    margin-bottom: 0.16rem;
    li {
      height: 0.88rem;
      padding: 0 0.3rem;
      display: flex;
      align-items: center;
      background: #ffffff;
      &.have-bottom {
        border-bottom: 2px solid rgba(245, 245, 245, 1);
      }
      .name {
        width: 100%;
        text-align: left;
      }
    }
  }
  &-change {
    background: #ffffff;
    padding: 0.36rem 0 0 0.3rem;
    &-name {
      font-size: 0.3rem;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      text-align: left;
    }
    &-money {
      height: 1.38rem;
      padding: 0.35rem 0;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(245, 245, 245, 1);
      .pay-form {
        border: 2px solid rgba(153, 153, 153, 1);
        border-radius: 0.05rem;
        .van-cell {
          padding: 0.1rem 0.16rem;
        }
      }
      &-title {
        font-size: 0.28rem;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
    }
    &-lose {
      height: 0.88rem;
      display: flex;
      align-items: center;
      .num {
        font-size: 0.28rem;
        font-weight: 500;
        color: @primary;
      }
    }
  }
  &-submit {
    background: #ffffff;
    margin-top: 0.16rem;
    .remind {
      font-size: 0.28rem;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      padding: 0.22rem;
      text-align: left;
    }
    .btn {
      width: 5.8rem;
      height: 0.86rem;
      background: @primary;
      border-radius: 0.1rem;
      font-size: 0.3rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      margin-top: 1rem;
    }
  }
}
</style>