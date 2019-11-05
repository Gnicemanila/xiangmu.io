<template>
  <div class="position">
    <div class="header-nav">
      <div class="header">
        <span class="left">
          <span @click="goBack()">取消</span>
        </span>
        <span class="tittle">
          <span>所在位置</span>
        </span>
        <span class="right"  @click="goBack()">
          <span>完成</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Position",
  components: {
  },
  computed: {
    ...mapState({
    //   name: state => state.name
    })
  },
  methods: {
    // ...mapActions(["runName"])
        goBack(path) {
      path ? this.$router.push({ path: path }) : this.$router.history.go(-1);
    }
  }
};
</script>
<style lang="less">
.position{
  .header-nav {
    height: 0.88rem;
    .header {
      width: 100%;
      height: 0.88rem;
      background: @primary;
      display: flex;
      align-items: center;
      position: fixed;
      left: 0;
      z-index: 2;
      .left {
        margin-left: 0.11rem;
        flex: 1 1;
        height: 100%;
        align-items: center;
        white-space: nowrap;
        display: flex;
        font-size: 0.3rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      }
      .tittle {
        font-size: 0.34rem;
        justify-content: center;
        font-weight: 600;
        display: flex;
        flex: 1 1;
        height: 100%;
        align-items: center;
        white-space: nowrap;
        color: #fff;
      }
      .right {
        flex: 1 1;
        height: 100%;
        align-items: center;
        white-space: nowrap;
        justify-content: flex-end;
        display: flex;
        margin-right: 0.3rem;
        font-weight: 500;
        font-size: 0.3rem;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>