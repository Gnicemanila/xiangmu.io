<template>
  <div class="about-me">
    <Header goback="true" msg="个人信息" serve="true" />
    <div class="picture-version">
      <span class="picture"></span>
      <span class="version">当前版本V1.0.0</span>
    </div>
    <ul class="default-deatil">
      <li class="have-bottom">
        <span class="info-fun">本站简介</span>
        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom">
        <span class="info-fun">关于我们</span>

        <i class="icon-next fr"></i>
      </li>
      <li>
        <span class="info-fun">联系我们</span>
        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom have-margin">
        <span class="info-fun">功能介绍</span>

        <i class="icon-next fr"></i>
      </li>
      <li>
        <span class="info-fun">软件分享</span>
        <i class="icon-next fr"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "AboutMe",
  components: {
    Header
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
.about-me {
  .picture-version {
    background: #ffffff;
    height: 2.22rem;
    padding-top: 0.43rem;
    align-items: center;
    .picture {
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    margin: auto;
    background: #ddd;
    }
  }
}
</style>