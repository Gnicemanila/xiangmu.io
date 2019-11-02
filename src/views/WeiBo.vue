<template>
  <div class="weibo">
    <Header goback="true" msg="动态" />
    <div class="content">
      <div v-for="(item,i) in list" :key="i">
        <Message />
      </div>
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
  data() {
    return {
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
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
.weibo {
}
</style>