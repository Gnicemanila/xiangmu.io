<template>
  <div class="is-public">
    <Header lefttext="取消" msg="谁可以看" righttext="完成" />
    <ul class="is-public-list">
      <li>公开所有人都可以看见</li>
      <li>私密仅自己可以看见</li>
      <li>部分人可以看见</li>
      <li>不给谁看</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "IsPublic",
  components: {
    Header
  },
  computed: {
    ...mapState({
      //   name: state => state.name
    })
  },
  methods: {
    // ...mapActions(["runName"])
  }
};
</script>
<style lang="less">
.is-public {
  &-list {
    background: #ffffff;
    margin-top: 0.15rem;
    li {
      height: 0.9rem;
      padding: 0 0.32rem;
      align-items: center;
      display: flex;
      background: #fff;
      border-bottom: 1px solid #f5f5f5;
    }
  }
}
</style>