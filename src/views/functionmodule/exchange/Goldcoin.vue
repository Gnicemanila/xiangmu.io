<template>
  <div class="goldcoin">
    <Header goback="true" msg="金币提现" serve="true" />
    <ul class="goldcoin-user">
      <li>
        <span class="name">金币余额:</span>
        <span>99999999</span>
      </li>
      <li>
        <span class="name">提款银行:</span>
        <span>中国银行</span>
      </li>
      <li>
        <span class="name">账户姓名:</span>
        <span>彭于晏</span>
      </li>
      <li>
        <span class="name">银行账号:</span>
        <span>6222*********1234</span>
      </li>
      <li>
        <span class="name">提款金额:</span>
        <div class="pay-form">
          <van-field v-model="num" placeholder="请输入兑换积分数" />
        </div>
      </li>
      <li>
        <span class="name">消耗金币:</span>
        <span>99999999</span>
      </li>
    </ul>
    <div class="goldcoin-submit">
      <div class="info">
        温馨提示：当金币数量达到100个时，方可提现。
        1个金币=1元。
      </div>
      <button class="btn">提交</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "Goldcoin",
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
.goldcoin {
  background: #ffffff;
  &-user {
    li {
      height: 0.88rem;
      padding: 0 0.3rem;
      display: flex;
      align-items: center;
      border-bottom: 2px solid rgba(245, 245, 245, 1);
      .name {
        font-size: 0.3rem;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        margin-right: 0.3rem;
      }
      .pay-form {
        .van-cell {
          padding: 0 0.16rem 0 0;
        }
      }
    }
  }
  &-submit {
    background: #ffffff;
    .info {
      padding: 0.18rem 1rem;
      font-size: 0.26rem;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
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
      margin-top: 0.75rem;
    }
  }
}
</style>