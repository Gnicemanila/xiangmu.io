<template>
  <div class="weibo">
    <Header goback="true" msg="动态"/>
    <div class="content">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Me />
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
  computed: {
    ...mapState({
      name: state => state.name
    })
  },
  methods: {
    ...mapActions(["runName"])
  }
};
</script>
<style lang="less">
    .weibo{

    }
</style>