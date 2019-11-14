<template>
  <div class="weibo">
    <Header goback="true" msg="动态" />
     <van-loading size="24px" vertical v-if="loading">加载中...</van-loading>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div v-for="(item,i) in weiboList" :key="i">
          <div class="item">
            <img :src="item.album_1000_1000" alt="">
            <ul class="info">
              <li>{{item.album_title}}</li>
              <li>演唱：{{item.author}}</li>
              <li>{{item.country}}</li>
              <li>{{item.language}}</li>
            </ul>
          </div>
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
      weiboList: [],
      init:1,
      loading:true
    };
  },
  computed: {
    ...mapState({
      // weiboList: state => state.weibo.weiboList,
      user: state => state.user
    })
  },
  created() {
    this.loadData(1);
  },
  mounted() {
    document.addEventListener("keydown", this.onKeyDown);
  },
  methods: {
    loadData(page) {
      var self = this;
      let init =page?page:this.init;
      let parameter = {};
      this.$http("/musicRankingsDetails?type="+init, parameter,).then(res => {
        if (page) {
          this.weiboList = res.result;
          this.init = 1;
          this.loading=false;
        } else {
          if(res.result){
            this.weiboList = this.weiboList.concat(res.result)
            this.init  =this.init + 1;
            }else{
            this.weiboList = this.weiboList;
          }
        }
        console.log(this.weiboList)
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
                self.loadData();
              }, 1000);
            });
            self.scroll.on("pullingDown", pos => {
              document.querySelector(".loading-down").innerText = "刷新中...";
              setTimeout(function() {
                // 恢复文本值
                document.querySelector(".loading-down").innerText = ""; // 向列表添加数据
                self.loadData(1);
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
      .item{
        display: flex;
        padding:.1rem .3rem;
        img{
          width: 2rem;
          height: 2rem;
        }
        .info{
              width: 70%;
              li{
                    padding: 0 0.1rem;
                    border-bottom: 1px solid #f5f5f5;
              }
        }
      }
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