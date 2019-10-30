<template>
  <div class="message">
    <div class="avatar avatar-"></div>
    <div class="user-info">
      <span class="vip"> 管理员</span>
      <span class="user">彭于晏</span>
      <span class="time">20:11:38</span>
    </div>
    <div class="msg-content">qweqweqw金合欢花
        或或或或或或或或或或或或或或或或或或或或或或
        或或或或或或或或或或或或或或或或或或或或或或或
        或或或或或或或或或或或或或或或回国过过过过过过
        过过过过过过过过过过过过过过过</div>
  </div>
</template>

<script>
export default {
  name: "Message",
//   props:['user'],
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.message {
  padding: 0.24rem 0.25rem;
  overflow: hidden;
  position: relative;
  .avatar {
    float: left;
    border-radius: 100%;
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 0.15rem;
    background: #ddd;
  }
  .user-info {
    overflow: hidden;
    display: flex;
        align-items: center;
    .vip{
        font-size:.28rem;
        margin-right: .3rem;
font-weight:500;
color:@primary;
    }
    .user {
      font-size: 0.24rem;
      font-weight: 700;
      color: #253c72;
      padding-right: 0.2rem;
    }
    .time {
      display: inline-block;
      font-size: 0.22rem;
      font-weight: 500;
      color: #c3c3c3;
    }
  }
      .msg-content {
      float: left;
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
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: -0.117rem;
        width: 0;
        height: 0;
        border-width: 0.117rem;
        border-style: solid;
        border-color: #fff transparent transparent;
      }
    }
}
</style>
