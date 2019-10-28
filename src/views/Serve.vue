<template>
  <div class="serve">
    <Header msg="在线客服" goback="true" />
    <div class="info"></div>
    <ul class="list">
      <li>
        <i class="icon-qq"></i>
        <span>QQ客服1</span>
      </li>
      <li class="have-top">
        <i class="icon-online"></i>
        <span>在线客服1</span>
      </li>
      <li class="have-top">
        <i class="icon-wechat"></i>
        <span>微信客服1</span>
      </li>
      <li class="have-top">
        <i class="icon-online"></i>
        <span>在线客服1</span>
      </li>
      <li class="have-top">
        <i class="icon-wechat"></i>
        <span>微信客服1</span>
      </li>
      <li class="have-top">
        <i class="icon-online"></i>
        <span>在线客服1</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "serve",
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
.serve {
  width: 7.5rem;
  height: 13.34rem;
  background: url("../assets/imgs/serve/background.png") no-repeat;
  background-size: 100%;
  .info {
    width: 4.33rem;
    height: 1.91rem;
    background: url("../assets/imgs/serve/info.png") no-repeat;
    background-size: 100%;
    margin: 1.07rem 1.62rem 1.01rem 1.55rem;
  }
  .list {
    padding: 0 1.1rem;
    height: 4.77rem;
    overflow: scroll;
    li {
      height: 0.9rem;
      border: 1px solid @primary;
      border-radius: 0.45rem;
      padding-left: 1.54rem;
      display: flex;
      align-items: center;
      &.have-top {
        margin-top: 0.39rem;
      }
      i {
        display: inline-block;
        width: 0.61rem;
        height: 0.61rem;
        &.icon-qq {
          background: url("../assets/imgs/serve/qq.png") no-repeat;
          background-size: 100%;
        }
        &.icon-online {
          background: url("../assets/imgs/serve/online.png") no-repeat;
          background-size: 100%;
        }
        &.icon-wechat {
          background: url("../assets/imgs/serve/wechat.png") no-repeat;
          background-size: 100%;
        }
      }
      span {
        padding-left: 0.2rem;
      }
    }
  }
}
</style>