<template>
  <div class="article">
    <Header goback="true" :msg="msg" />
    <div class="article-title">
        一种云
    </div>
    <div class="article-user">
      <div class="article-user-head"></div>
      <div class="article-user-title">
        <div class="article-user-title-name"> 瞿秋白 </div>
        <div class="article-user-title-time">8月15日发表</div>
      </div>
      <button class="article-user-btn">+关注</button>
    </div>
    <div class="article-content">
      天总是皱着眉头。太阳光如果还射得到地面上，那也总是稀微的淡薄的。至于月亮，那更不必说，他只是偶然露出半面，用他那惨淡的眼光看一看这罪孽的人间，这是寡妇孤儿的眼光，眼睛里含着总算还没有流干的眼泪。受过不只一次封禅大典的山岳，至少有大半截是上了天，只留一点山脚给人看。黄河，长江……据说是中国文明的母亲，也不知道怎么变了心，对于他们的亲骨肉，都摆出一副冷酷的面孔。从春天到夏天，从秋天到冬天，这样一年年的过去，淫虐的雨，凄厉的风和肃杀的霜雪更番的来去，一点儿光明也没有。那云是从什么地方来的？这是太平洋上的大风暴吹过来的，这是大西洋上的狂飙吹过来的。还有那模糊的血肉—--榨床底下淌着的模糊的血肉蒸发出来的。那些会画符的人——会写借据，会写当票的人，就用这些符号在呼召。那些吃泥土的土蜘蛛——虽然死了也不过只要六尺土地藏他的贵体，可是活着总要吃这么一二百亩三四百亩的土地，——这些土蜘蛛就用屁股在吐着。那些肚里装着铁心肝钢肚肠的怪物，又竖起了一根根的烟囱在那里喷着。狂飙风暴吹来的，血肉蒸发的，呼召来的，喷出来的，都是这种云。这是战云。
      难怪总是漫漫的长夜了！
      什么时候才黎明呢？
      看那刚刚发现的虹。祈祷是没有用的了。只有自己去做雷公公电闪娘娘。那虹发现的地方，已经有了小小的雷电，打开了层层的乌云，让太阳重新照到紫铜色的脸。如果是惊天动地的霹雳——这可只有你自己做了雷公公电闪娘娘才办得到，如果那小小的雷电变成了惊天动地的霹雳，那才拨得开这些愁云惨雾。
    </div>
    <div class="article-comment">

    </div>
    <div class="article-foot" v-if="!show">
      <div class="article-foot-message" @click="openwrite()">
        <i class="icon-write"></i>
        写评论...
      </div>
      <i class="icon-like"></i>
      <i class="icon-good"></i>
      <i class="icon-share"></i>
    </div>
    <div class="article-input" v-if="show">
      <div class="article-input-content">
        <van-field v-model="message" placeholder="优质评论就会优先显示" @blur="changeShow()" />
      </div>
      <span class="send" @click="send()">发送</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "Article",
  components: {
    Header
  },
  data() {
    return {
      msg: "",
      show: false,
      message: ""
    };
  },
  computed: {
    ...mapState({
      //   name: state => state.name
    })
  },
  created() {
    this.msg = "获取的当前新闻头条";
  },
  methods: {
    ...mapActions(["runName"]),
    openwrite() {
      this.show = true;
    },
    send() {
      // console.log(this.message)
      this.show = false;
      this.message = "";
    },
    changeShow() {
      this.show = false;
      this.message = "";
    }
  }
};
</script>
<style lang="less">
.article {
  background: #ffffff;
    overflow: hidden;
      padding-bottom: .98rem;
  &-title {
    padding: 0.3rem;
    font-size: 0.34rem;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  &-user {
    padding: 0 0.3rem;
    height: 0.7rem;
    display: flex;
    align-items: center;
    &-head {
      width: 0.7rem;
      height: 0.7rem;
      background: url("../../../assets/imgs/acticle/70.png") no-repeat;
      background-size: 100%;
      border-radius: 50%;
    }
    &-title {
      height: 0.7rem;
      padding: 0 0.3rem;
      width: 5rem;
      text-align: left;
      &-name {
        font-size: 0.28rem;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        height: 0.27rem;
        margin-bottom: 0.14rem;
      }
      &-time {
        height: 0.23rem;
        line-height: 0.23rem;
        font-size: 0.24rem;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
      }
    }
    &-btn {
      width: 1.2rem;
      height: 0.48rem;
      background: @primary;
      border-radius: 0.05rem;
      font-size: 0.24rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }
  &-content {
    font-size: 0.3rem;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    padding: 0.3rem;
  }
  &-foot {
    height: 0.98rem;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(245, 245, 245, 1);
    padding: 0.25rem 0.3rem;
    display: flex;
    align-items: center;
    &-message {
      width: 2.8rem;
      height: 0.48rem;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.2rem;
      font-size: 0.24rem;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      display: flex;
      padding: 0.09rem 0.19rem;
      .icon-write {
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        background: url("../../../assets/imgs/acticle/write.png") no-repeat;
        background-size: 100%;
      }
    }
    .icon-like {
      display: inline-block;
      width: 0.36rem;
      height: 0.36rem;
      background: url("../../../assets/imgs/acticle/like.png") no-repeat;
      background-size: 100%;
      margin: 0 0.5rem;
    }
    .icon-good {
      display: inline-block;
      width: 0.36rem;
      height: 0.36rem;
      background: url("../../../assets/imgs/acticle/good.png") no-repeat;
      background-size: 100%;
      margin: 0 0.5rem;
    }
    .icon-share {
      display: inline-block;
      width: 0.36rem;
      height: 0.36rem;
      background: url("../../../assets/imgs/acticle/share.png") no-repeat;
      background-size: 100%;
      margin: 0 0.5rem;
    }
  }
  &-input {
    height: 0.98rem;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(245, 245, 245, 1);
    display: flex;
    align-items: center;
    padding: 0.1rem 0.3rem;
    .article-input-content {
      background: rgba(255, 255, 255, 1);
      width: 5.8rem;
      margin-right: 0.2rem;
      .van-cell {
        padding: 0.1rem 0.16rem;
      }
    }
  }
}
</style>