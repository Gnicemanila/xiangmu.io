<template>
  <div class="integral">
    <Header goback="true" msg="积分充值/兑换" serve="true" />
    <ul class="integral-fun">
      <li @click="goNext('/pay')">
        <div class="pay">
          <span>线下充值</span>
          <span class="pay-info">支持微信转账、支付宝转账、网银转账等</span>
        </div>
        <van-icon name="arrow" size="20px" class="fr" />
      </li>
      <li @click="goNext('/exchange')">
        <div class="pay">
          <span>兑换积分</span>
        </div>
        <van-icon name="arrow" size="20px" class="fr" />
      </li>
    </ul>
    <div class="integral-info">
      温馨提示：充值的金额自动兑换为积分，积分只用于购买
      头像。
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "Integral",
  components: {
    Header
  },
  computed: {
    ...mapState({
      //   name: state => state.name
    })
  },
  methods: {
    ...mapActions(["runName"]),
        goNext(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>
<style lang="less">
.integral {
  &-fun {
    li {
      margin-top: 0.16rem;
      height: 1.2rem;
      padding: 0.26rem;
      background: #ffffff;
      display: flex;
      align-items: center;
      .pay {
        width: 100%;
        span {
          display: block;
          text-align: left;

          &:first-child {
            font-size: 0.32rem;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
          }
          &.pay-info {
            font-size: 0.28rem;
            font-weight: 500;
            color: rgba(153, 153, 153, 1);
          }
        }
      }
    }
  }
  &-info {
    height: 1.16rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.2rem 0.37rem;
    font-size: 0.26rem;
    justify-content: center;
    text-align: left;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    background: #ffffff;
  }
}
</style>