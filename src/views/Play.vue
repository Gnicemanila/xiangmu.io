<template>
  <div :class="{'play':true,'iphonex':iphonex}">
    <Header msg="活动" />
    <ul class="info">
      <li class="have-bottom play1"></li>
      <li class="have-bottom play2"></li>
      <li class="have-bottom play3"></li>
      <li class="have-bottom play4"></li>
            <li class="have-bottom play1"></li>
      <li class="have-bottom play2"></li>
      <li class="have-bottom play3"></li>
      <li class="have-bottom play4"></li>
    </ul>
    <Footer message="活动" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
  name: "Play",
  components: {
    Footer,
    Header
  },
  data(){
    return {
      iphonex:false
    }
  },
  computed: {
    ...mapState({
      name: state => state.name
    })
  },
    mounted() {
    var u = navigator.userAgent;
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isIOS) {
      if (screen.height == 812 && screen.width == 375) {
        this.iphonex = true;
      } else {
        this.iphonex = false;
      }
    }
  },
  methods: {
    ...mapActions(["runName"])
  }
};
</script>
<style lang="less">
.play {
  padding-bottom: .98rem;
  &.iphonex{
     padding-bottom: 1.66rem;
  }
  .info {
    background: #ffffff;
    padding: 0.16rem 0;
    overflow: scroll;
    li {
      width: 7.5rem;
      height: 2.58rem;
      &.have-bottom {
        margin-bottom: 0.15rem;
      }
      &.play1 {
        background: url("../assets/imgs/play/play1s.png") no-repeat;
        background-size: 100%;
      }
      &.play2 {
        background: url("../assets/imgs/play/play2s.png") no-repeat;
        background-size: 100%;
      }
      &.play3 {
        background: url("../assets/imgs/play/play3s.png") no-repeat;
        background-size: 100%;
      }
      &.play4 {
        background: url("../assets/imgs/play/play4s.png") no-repeat;
        background-size: 100%;
      }
    }
  }
}
</style>