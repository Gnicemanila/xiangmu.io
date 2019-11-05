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
        <span class="right" @click="goBack()">
          <span>完成</span>
        </span>
      </div>
    </div>
    <Search placeholder="搜索附近位置" />
    <div class="position-not" @click="showPosition">
      <span>不显示位置</span>
      <i class="icon-sure"  v-if="show"></i>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Search from "@/components/Search.vue";
export default {
  name: "Position",
  components: {
    Search
  },
  data(){
      return {
          show:false
      }
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
    },
    showPosition(){
        this.show=true;
    }
  }
};
</script>
<style lang="less">
.position {
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
  &-not {
    width: 100%;
    height: 0.8rem;
    background: rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;
    margin-top: .3rem;
    padding: 0 .21rem;
    span {
      font-size: 0.28rem;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      text-align: left;
      width: 100%;
    }
    .icon-sure{
        display: inline-block;
        width: .36rem;
        height: .36rem;
        background: url('../../../assets/imgs/personal/position_sure.png') no-repeat;
        background-size: 100%;
    }
  }
}
</style>