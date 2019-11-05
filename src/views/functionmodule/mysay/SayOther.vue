<template>
  <div class="say-other">
    <div class="header-nav">
      <div class="header">
        <span class="left">
          <span @click="goBack()">取消</span>
        </span>
        <span class="tittle">
          <span>发表说说</span>
        </span>
        <span class="right">
          <span>发表</span>
        </span>
      </div>
    </div>
    <div class="say-other-content">
      <div class="say-other-content-message">
        <van-field
          v-model="message"
          rows="7"
          autosize
          type="textarea"
          placeholder="美好的一天又开始了......"
          maxlength="120"
          show-word-limit
        />
      </div>
    </div>
    <ul class="say-other-list">
      <li @click="goBack('/position')">
        <i class="icon-position"></i>
        <span class="name">所在位置</span>
        <van-icon name="arrow" />
      </li>
      <li>
        <i class="icon-at"></i>
        <span  class="name">提醒谁看</span>
        <van-icon name="arrow" />
      </li>
      <li>
        <i class="icon-people"></i>
        <span  class="name">谁可以看 <span class="fr">公开</span></span>
        <van-icon name="arrow" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "SayOther",
  components: {},
  computed: {
    ...mapState({
      //   name: state => state.name
    })
  },
  data() {
    return {
      message: ""
    };
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
.say-other {
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
  &-content {
    padding: 0 0.65rem;
    background: #ffffff;
    &-message {
      font-size: 0.28rem;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
  }
  &-list {
    padding: 0 0.65rem;
    background: #ffffff;
    li {
      height: 0.9rem;
      border-top: 1px solid #f5f5f5;
      display: flex;
      align-items: center;
      .icon-position {
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        background: url("../../../assets/imgs/personal/position.png") no-repeat;
        background-size: 100%;
      }
      .icon-at {
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        background: url("../../../assets/imgs/personal/at.png") no-repeat;
        background-size: 100%;
      }
      .icon-people {
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        background: url("../../../assets/imgs/personal/people.png") no-repeat;
        background-size: 100%;
      }
      .name {
        margin: 0 0.3rem;
        width: 100%;
        text-align: left;
      }
      &:last-child {
        border-bottom: 1px solid #f5f5f5;
      }
    }
  }
}
</style>