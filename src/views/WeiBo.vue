<template>
  <div class="weibo">
    <Header goback="true" msg="动态" />
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div v-for="(item,i) in weiboList" :key="i">
          <Message :list="item" v-if="!item.isme" />
          <Me :list="item" v-if="item.isme" />
        </div>
      </div>
      <div class="loading-hook"></div>
      <div class="loading-down"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
import Message from "@/components/Message";
import Me from "@/components/Me";
import BScroll from "@better-scroll/core";
import { getElementViewTop } from "../api/publicFuction";
export default {
  name: "WeiBo",
  components: {
    Header,
    Message,
    Me
  },
  data() {
    return {
      weiboList: []
    };
  },
  computed: {
    ...mapState({
      // weiboList: state => state.weibo.weiboList,
      user: state => state.user
    })
  },
  created() {
    this.loadData();
  },
  mounted() {
    document.addEventListener("keydown", this.onKeyDown);
  },
  methods: {
    loadData(init = false) {
      var self = this;
      let parameter = {};
      this.$http("/getweibolist", parameter, "post").then(res => {
        if (!init) {
          this.weiboList = res.data;
        } else {
          this.weiboList = res.data.concat(this.weiboList);
        }
        this.$nextTick(() => {
          if (!self.scroll) {
            self.scroll = new BScroll(this.$refs.wrapper, {
              pullDownRefresh: {
                threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
                stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
              },
              pullUpLoad: {
                threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
              },
              click: true,
              probeType: 3,
              startY: 0, //欢迎加入全栈开发交流圈一起学习交流：864305860
              scrollbar: true //面向1-3年前端人员
            });
            self.scroll.on("pullingUp", pos => {
              document.querySelector(".loading-hook").innerText = "加载中...";
              setTimeout(function() {
                // 恢复文本值
                document.querySelector(".loading-hook").innerText = ""; // 向列表添加数据
                self.loadData(true);
              }, 1000);
            });
            self.scroll.on("pullingDown", pos => {
              document.querySelector(".loading-down").innerText = "刷新中...";
              setTimeout(function() {
                // 恢复文本值
                document.querySelector(".loading-down").innerText = ""; // 向列表添加数据
                self.loadData();
              }, 1000);
            });
          } else {
            self.scroll.finishPullUp();
            self.scroll.finishPullDown();
            self.scroll.refresh();
          }
        });
      });
    }
  }
};
</script>
<style lang="less">
.weibo {
  .wrapper {
    top: 0.88rem;
    bottom: 0;
    width: 100%;
    position: absolute;
    left: 0;
    overflow: hidden;
    .content {
    }
    .loading-down {
      position: absolute;
      top: 0rem;
      left: 40%;
    }
    .loading-hook {
      position: absolute;
      bottom: 0rem;
      left: 40%;
    }
  }
}
</style>