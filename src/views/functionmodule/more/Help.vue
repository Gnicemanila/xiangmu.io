<template>
  <div class="help">
    <Header goback="true" msg="帮助中心" />
    <ul class="default-deatil">
      <li class="have-bottom" @click="goNext('/helpDeatil/1')">
        <span class="info-fun">如何成为本站会员？</span>
        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom" @click="goNext('/helpDeatil/2')">
        <span class="info-fun">什么是积分？</span>
        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom" @click="goNext('/helpDeatil/3')">
        <span class="info-fun">如何充值积分？</span>
        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom" @click="goNext('/helpDeatil/4')">
        <span class="info-fun">如何兑换积分？</span>
        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom" @click="goNext('/helpDeatil/5')">
        <span class="info-fun">什么是金币？</span>
        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom" @click="goNext('/helpDeatil/6')">
        <span class="info-fun">如何提款？</span>
        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom" @click="goNext('/helpDeatil/7')">
        <span class="info-fun">什么是大V？</span>
        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom" @click="goNext('/helpDeatil/8')">
        <span class="info-fun">绑定/修改/解绑银行账号？</span>
        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom" @click="goNext('/helpDeatil/9')">
        <span class="info-fun">如何修改手机号码？</span>
        <i class="icon-next fr"></i>
      </li>
      <li class="have-bottom" @click="goNext('/helpDeatil/10')">
        <span class="info-fun">什么是邀请码？</span>
        <i class="icon-next fr"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Help",
  components: {
    Header
  },
  computed: {},
  methods: {
    goNext(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>
<style lang="less">
</style>