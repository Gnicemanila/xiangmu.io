<template>
  <div class="weibo">
    <Header goback="true" msg="动态" />
    <div class="content">
      <div v-for="(item,i) in weiboList" :key="i">
      <Message  :list.sync="item" v-if="!item.isme"/>
      <Me :list.sync="item" v-if="item.isme"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
import Message from "@/components/Message";
import Me from "@/components/Me";
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
  methods: {
       ...mapActions('weibo',["updateList"]),
  }
};
</script>
<style lang="less">
.weibo {
}
</style>