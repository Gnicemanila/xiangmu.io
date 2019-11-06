<template>
  <div class="remind">
    <Header lefttext="取消" msg="提醒谁看" righttext="完成" />
    <Search placeholder="搜索用户名" />
    <ul class="remind-list">
      <li>胡歌</li>
      <li>彭于晏</li>
      <li>李现</li>
      <li>我</li>
      <li>杨紫</li>
      <li>陈伟霆</li>
      <li>谢霆锋</li>
      <li>雷佳音</li>
      <li>张嘉译</li>
      <li>祁东</li>
      <li>黄海波</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
import Search from "@/components/Search.vue";
export default {
  name: "Remind",
  components: {
    Header,
    Search
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
.remind {
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