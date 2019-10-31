<template>
  <div class="make-money">
    <Header goback="true" msg="我要赚钱" serve="true" />
    <ul>
      <li @click="goNext('/myNum')">
        <span>我的邀请码：88888888</span>
        <van-icon name="arrow" size="20px" class="fr" />
      </li>

      <li @click="goNext('/getIntegral')">
        <span>领取积分</span>
        <van-icon name="arrow" size="20px" class="fr" />
      </li>
      <li @click="goNext('/myPartner')">
        <span>我的助力伙伴</span>
        <van-icon name="arrow" size="20px" class="fr" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "MakeMoney",
  components: {
    Header
  },
  computed: {
    ...mapState({
      //   name:state=>state.name
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
.make-money {
  ul {
    li {
      height: 0.88rem;
      border-bottom: 1px solid rgba(215, 215, 215, 1);
      background: #ffffff;
      padding: 0 0.3rem;
      display: flex;
      align-items: center;
      span {
        display: block;
        font-size: 0.3rem;
        width: 100%;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        text-align: left;
      }
    }
  }
}
</style>