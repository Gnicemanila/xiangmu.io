<template>
  <div class="say-other">
     <Header lefttext="取消" msg="发表说说" righttext="发表"  />
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
      <li @click="goBack('/remind')">
        <i class="icon-at"></i>
        <span  class="name">提醒谁看</span>
        <van-icon name="arrow" />
      </li>
      <li @click="goBack('/isPublic')">
        <i class="icon-people"></i>
        <span  class="name">谁可以看 <span class="fr">公开</span></span>
        <van-icon name="arrow" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "SayOther",
  components: {
      Header
  },
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
    ...mapActions('weibo',["updateList"]),
    goBack(path) {
      path ? this.$router.push({ path: path }) : this.$router.history.go(-1);
    }
  }
};
</script>
<style lang="less">
.say-other {
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