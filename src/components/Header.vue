<template>
  <div class="header">
    <span class="left" >
      <span @click="goBack()" class='go-back' v-if="goback"></span>
      <span  v-if="left">
       {{left}}
      </span>
    </span>
    <span class="tittle">
      <span>{{msg}}</span>
    </span>
    <span class="right">
      <span v-if="right" v-html="right" @click="goServe()"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["left", "msg", "right",'goback'],
  methods: {
    goBack() {
     this.$router.history.go(-1);
    },
    goServe() {
      console.log("goServe");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  width: 7.5rem;
  height: 0.88rem;
  background: @primary;
  display: flex;
  align-items: center;
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
  }
}
</style>
