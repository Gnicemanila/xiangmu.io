<template>
  <div class="pay">
    <Header goback="true" msg="线下充值" serve="true" />
    <div class="pay-remind">
      温馨提示：入款转换积分的时候如有疑问请查看帮助或咨询客服。
    </div>
    <ul class="pay-form">
      <li>
        <span>充值账号：</span>
        <div class="pay-form">
          <van-field v-model="you_name" placeholder="充值账号" />
        </div>
      </li>
      <li>
        <span>充值金额：</span>
        <div class="pay-form">
          <van-field v-model="money" placeholder="充值金额" />
        </div>
      </li>
      <li>
        <span>获得积分：</span>
        <div class="pay-form">
          <van-field v-model="jifen" placeholder="获得积分" />
        </div>
      </li>
      <li>
        <span>转入银行：</span>
        <div class="pay-form">
          <van-field v-model="bank" placeholder="转入银行" />
        </div>
        <van-icon name="arrow-down" class="fr fun" size="20px" @click="isShowList" />
      </li>
      <li>
        <span>转入户名：</span>
        <div class="pay-form">
          <van-field v-model="me_name" placeholder="转入户名" />
        </div>
        <button
          class="copy"
          v-clipboard:copy="me_name"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >复制</button>
      </li>
      <li>
        <span>转入账号：</span>
        <div class="pay-form">
          <van-field v-model="me_bank" placeholder="转入账号" />
        </div>
        <button
          class="copy"
          v-clipboard:copy="me_bank"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >复制</button>
      </li>
      <li>
        <span>汇款姓名：</span>
        <div class="pay-form">
          <van-field v-model="you_real_name" placeholder="汇款姓名" />
        </div>
      </li>
      <li>
        <span>联系方式：</span>
        <div class="pay-form">
          <van-field v-model="phone" placeholder="联系方式" />
        </div>
      </li>
    </ul>
    <button class="pay-btn">提交</button>
    <van-action-sheet v-model="showlist" :actions="banklist" @select="onSelect" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
import banklist from "../../../api/banklist";
import { Toast } from "vant";
export default {
  name: "Pay",
  components: {
    Header
  },
  mounted() {
    this.banklist = banklist;
  },
  data() {
    return {
      you_name: "",
      money: "",
      jifen: "",
      bank: "",
      me_name: "",
      me_bank: "",
      you_real_name: "",
      phone: "",
      showlist: false,
      banklist: [{ name: "选项" }, { name: "选项" }, { name: "选项" }]
    };
  },
  methods: {
    onSelect(item) {
      // 默认情况下，点击选项时不会自动关闭菜单
      // 可以通过 close-on-click-action 属性开启自动关闭
      this.showlist = false;
      this.bank = item.name;
    },
    isShowList() {
      this.showlist = !this.showlist;
    },
    onCopy() {
      Toast.success({
        duration: 1500,
        message: "复制成功"
      });
    },
    onError() {
      Toast.fail({
        duration: 1500,
        message: "复制失败"
      });
    }
  }
};
</script>
<style lang="less">
.pay {
  &-remind {
    height: 1.08rem;
    background: rgba(245, 245, 245, 1);
    align-items: center;
    text-align: left;
    font-size: 0.24rem;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    padding: 0.2rem;
  }
  &-form {
    li {
      height: 0.88rem;
      background: #ffffff;
      display: flex;
      align-items: center;
      padding-left: 0.31rem;
      border-bottom: 1px solid rgba(245, 245, 245, 1);
      .fun {
        margin-left: 0.58rem;
      }
      .pay-form {
        width: 56%;
        .van-cell {
          padding: 0 0.16rem;
        }
      }
      .copy {
        width: 1.2rem;
        height: 0.5rem;
        background: @primary;
        border-radius: 0.05rem;
        margin-right: 0.3rem;
        font-size: 0.26rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  &-btn {
    width: 5.8rem;
    height: 0.86rem;
    background: @primary;
    border-radius: 0.1rem;
    margin: 0.8rem 0.85rem;
    font-size: 0.3rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
}
</style>