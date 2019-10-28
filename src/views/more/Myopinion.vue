<template>
  <div class="my-opinion">
    <Header goback="true" msg="意见反馈" />
    <ul class="default-deatil">
      <li class="have-bottom">
        <span class="info-fun">
          意见反馈内容 ........
          <span class="write fr">待回复</span>
        </span>
        <van-icon name="arrow" size="25px" class="fr" />
      </li>
      <li class="have-bottom">
        <span class="info-fun">
          意见反馈内容 ........
          <span class="write fr">已回复</span>
        </span>
        <van-icon name="arrow" size="25px" class="fr" />
      </li>
      <li class="have-bottom">
        <span class="info-fun">
          意见反馈内容 ........
          <span class="write fr">已解决</span>
        </span>
        <van-icon name="arrow" size="25px" class="fr" />
      </li>
    </ul>
    <button class="btn" >提交新的反馈</button>
   
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "myopinion",
  components: {
    Header
  },
  data(){
    return {
      sure:false
    }
  },
  computed: {
    ...mapState({
      name: state => state.name
    })
  },
  methods: {
    ...mapActions(["runName"]),

  }
};
</script>
<style lang="less">
.my-opinion {
  .btn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 7.5rem;
    height: 0.88rem;
    background: @primary;
    font-size: 0.3rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
}
</style>