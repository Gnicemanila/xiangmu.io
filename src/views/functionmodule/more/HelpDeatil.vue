<template>
  <div class="help-deatil">
    <Header goback="true" :msg="msg" serve="true" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "HelpDeatil",
  components: {
    Header
  },
  computed: {
    ...mapState({
      name: state => state.name
    })
  },
  created() {
    //   console.log(this.$route.params.type)
    let type = this.$route.params.type;
    switch (type) {
      case "1":
        this.msg = "如何成为本站会员？";
        break;
      case "2":
        this.msg = "什么是积分？";
        break;
      case "3":
        this.msg = "如何充值积分？";
        break;
      case "4":
        this.msg = "如何兑换积分？";
        break;
      case "5":
        this.msg = "什么是金币？";
        break;
      case "6":
        this.msg = "如何提款？";
        break;
      case "7":
        this.msg = "什么是大V？";
        break;
      case "8":
        this.msg = "绑定/修改/解绑银行账号？";
        break;
      case "9":
        this.msg = "如何修改手机号码？";
        break;
      case "10":
        this.msg = "什么是邀请码？";
      case "11":
        this.msg = "本站简介";
        break;
      case "12":
        this.msg = "关于我们";
        break;
      case "13":
        this.msg = "功能介绍";
        break;
    }
  },
  methods: {
    ...mapActions(["runName"])
  }
};
</script>
<style lang="less">
.help-deatil {
}
</style>