<template>
  <div class="my-partner">
    <Header goback="true" msg="我的助力伙伴" serve="true" />
    <div class="search">
      <div class="form-input">
        <van-field v-model="value" placeholder="搜索用户名" />
      </div>
      <button class="btn">搜索</button>
    </div>

    <div class="not-have">
      <p>您还没有助力伙伴</p>
      <button class="add">
        <router-link to="/myNum">邀请伙伴</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "MyPartner",
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
.my-partner {
  .search {
    padding: 0.2rem 0.4rem;
    height: 1.16rem;
    display: flex;
    background: #ffffff;
    justify-content: center;
    .form-input {
      height: 0.76rem;
      width: 5.2rem;
      border: 2px solid @primary;
      border-radius: 0.05rem;

      .van-cell {
        padding: 0 0.16rem;
        line-height: 0.65rem;
      }
    }
    .btn {
      font-size: 0.32rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      width: 1.3rem;
      height: 0.76rem;
      background: @primary;
      border-radius: 5px;
      margin-left: 0.2rem;
    }
  }
  .not-have {
    position: fixed;
    bottom: 5.08rem;
    left: 0;
    width: 100%;
    align-items: center;
    height: 1.11rem;
    p {
      font-size: 0.28rem;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 0.24rem;
    }
    .add {
      width: 2.6rem;
      height: 0.68rem;
      background: @primary;
      border-radius: 0.1rem;
      font-size: 0.28rem;
      font-weight: 500;
      a {
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>