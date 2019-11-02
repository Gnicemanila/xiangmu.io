<template>
  <div class="me">
    <div class="avatar avatar-"></div>
    <div class="user-info-warp">
      <div class="user-info fr">
        <span class="time">20:11:38</span>
        <span class="user">胡歌</span>
        <span class="vip">大V</span>
      </div>
    </div>
    <div class="msg-content fr">我也是个形容词 ！primary</div>
  </div>
</template>

<script>
export default {
  name: "Me",
  //   props:['user'],
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.me {
  padding: 0.24rem 0.25rem;
  overflow: hidden;
  position: relative;
  .avatar {
    float: right;
    border-radius: 100%;
    width: 0.9rem;
    height: 0.9rem;
    margin-left: 0.15rem;
    background: url("../assets/imgs/chat/huge.png") no-repeat;
    background-size: 100%;
  }
  .user-info-warp {
    overflow: hidden;
    .user-info {
      display: flex;
      align-items: center;
      .vip {
        font-size: 0.28rem;
        font-weight: 500;
        color: @primary;
      }
      .user {
        font-size: 0.24rem;
        font-weight: 700;
        color: #253c72;
        padding-right: 0.2rem;
        margin-left: 0.3rem;
      }
      .time {
        display: inline-block;
        font-size: 0.22rem;
        font-weight: 500;
        color: #c3c3c3;
      }
    }
  }
  .msg-content {
    position: relative;
    margin-left: 0.117rem;
    margin-top: 0.094rem;
    padding: 0.117rem;
    max-width: 5.273rem;
    font-size: 0.281rem;
    line-height: 0.329rem;
    word-break: break-word;
    background: #fff;
    color: #333;
    border-radius: 0 0.117rem 0.117rem 0.117rem;
    text-align: left;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: auto;
      right: -0.117rem;
      width: 0;
      height: 0;
      border-width: 0.117rem;
      border-style: solid;
      border-color: #fff transparent transparent;
    }
  }
}
</style>
