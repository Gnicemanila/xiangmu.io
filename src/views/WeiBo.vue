<template>
  <div class="weibo">
    <Header goback="true" msg="动态" />
    <div class="wrapper">
    <div class="content">
      <div v-for="(item,i) in weiboList" :key="i">
      <Message  :list.sync="item" v-if="!item.isme"/>
      <Me :list.sync="item" v-if="item.isme"/>
      </div>
    </div>
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
    };
  },
  computed: {
    ...mapState({
      weiboList: state => state.weibo.weiboList,
      user:state=>state.user
    })
  },
    mounted() {
    let ele = document.querySelector(".wrapper");
    ele.style.height =
    document.body.offsetHeight - getElementViewTop(ele) + "px";
    document.addEventListener("keydown", this.onKeyDown);
    this.init(ele.style.height);
  },
  methods: {
      //  ...mapActions('weibo',["updateList"]),
  init() {
      let wrapper = document.querySelector('.wrapper');
      this.scroll = new BScroll(wrapper, {
        scrollY: true,
        click: true,
        probeType: 3 // listening scroll hook
      });
    },
  }
};
</script>
<style lang="less">
.weibo {
}
</style>