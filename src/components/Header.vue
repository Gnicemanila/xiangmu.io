<template>
  <div class="header-nav">
    <div class="header">
      <span class="left">
        <span @click="goBack()" class="go-back" v-if="goback"></span>
        <span v-if="left" v-html="left"></span>
        <span v-if="lefttext" v-html="lefttext" @click="goBack()"></span>
      </span>
      <span class="tittle">
        <span>{{msg}}</span>
      </span>
      <span class="right">
        <i @click="goBack('/serve')" class="go-serve" v-if="serve"></i>
        <span v-if="right" v-html="right"></span>
         <span v-if="righttext" v-html="righttext" @click="goBack()"></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["left", "right", "msg", "serve", "goback",'lefttext','righttext'],
  methods: {
    goBack(path) {
      path ? this.$router.push({ path: path }) : this.$router.history.go(-1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
            font-size: 0.3rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
