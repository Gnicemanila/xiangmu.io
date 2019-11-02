<template>
  <div class="about">
    <Header msg="更多" goback="true" />
    <ul class="default-deatil">
      <li class="have-bottom" @click="goRouter('/aboutMe')">
        <span class="info-fun">
          关于本站
          <span class="write fr">版本1.0.0</span>
        </span>

        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom" @click="goRouter('/help')">
        <span class="info-fun">帮助中心</span>
        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom have-margin" @click="goRouter('/opinion')">
        <span class="info-fun">意见反馈</span>
        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom have-margin">
        <span class="info-fun">联系我们</span>
        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom" @click="goRouter('/shareMe')">
        <span class="info-fun">软件分享</span>
        <i class="icon-next fr"></i>
      </li>
    </ul>
    <!-- <Footer message="更多" /> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
  name: "More",
  components: {
    Footer,
    Header
  },
  computed: {
    ...mapState({
      name: state => state.name
    })
  },
  methods: {
    ...mapActions(["runName"]),
    goRouter(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>