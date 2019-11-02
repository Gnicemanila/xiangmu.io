<template>
  <div class="account">
    <Header goback="true" msg="账户清单" serve="true" />
    <ul class="account-head">
      <li class="active">积分</li>
      <li>金币</li>
      <li>充值</li>
      <li>提款</li>
      <li class="have-border">
        <span>筛选</span>
        <i class="icon-different"></i>
      </li>
    </ul>
    <ul class="account-content">
      <li class="account-content-head">
        <span>时间</span>
        <span>类型</span>
        <span>账变数额</span>
        <span>账变后余额</span>
      </li>
      <li>
        <span>2019-01-0100:00:00</span>
        <span>汉正街消费</span>
        <span>999999</span>
        <span>999999</span>
      </li>
      <li>
        <span>2019-01-0100:00:00</span>
        <span>汉正街消费</span>
        <span>999999</span>
        <span>999999</span>
      </li>
      <li>
        <span>2019-01-0100:00:00</span>
        <span>汉正街消费</span>
        <span>999999</span>
        <span>999999</span>
      </li>
      <li>
        <span>2019-01-0100:00:00</span>
        <span>汉正街消费</span>
        <span>999999</span>
        <span>999999</span>
      </li>
      <li>
        <span>2019-01-0100:00:00</span>
        <span>汉正街消费</span>
        <span>999999</span>
        <span>999999</span>
      </li>
      <li>
        <span>2019-01-0100:00:00</span>
        <span>汉正街消费</span>
        <span>999999</span>
        <span>999999</span>
      </li>

      <li>
        <span>2019-01-0100:00:00</span>
        <span>汉正街消费</span>
        <span>999999</span>
        <span>999999</span>
      </li>
      <li>
        <span>2019-01-0100:00:00</span>
        <span>汉正街消费</span>
        <span>999999</span>
        <span>999999</span>
      </li>
      <li>
        <span>2019-01-0100:00:00</span>
        <span>汉正街消费</span>
        <span>999999</span>
        <span>999999</span>
      </li>
      <li>
        <span>2019-01-0100:00:00</span>
        <span>汉正街消费</span>
        <span>999999</span>
        <span>999999</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "Account",
  components: {
    Header
  },
  data() {
    return {
      active: 1
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
.account {
  &-head {
    background: #ffffff;
    height: 0.88rem;
    display: flex;
    align-items: center;
    li {
      width: 20%;
      height: 0.88rem;
      line-height: 0.88rem;
      font-size: 0.3rem;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      &.have-border {
        border-left: 2px solid rgba(215, 215, 215, 1);
      }
      &.active {
        border-bottom: 0.04rem solid @primary;
      }
    }
  }
  &-content {
    margin-top: 0.16rem;
    background: #ffffff;
    li {
      background: #ffffff;
      height: 0.88rem;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f5f5f5;
      &.account-content-head {
        span {
          width: 25%;
          height: 0.88rem;
          line-height: 0.88rem;
          font-size: 0.3rem;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
        }
      }
      span {
        width: 25%;
        height: 0.88rem;
        display: inherit;
        justify-content: center;
        align-items: center;
        font-size: 0.24rem;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
    }
  }
}
</style>