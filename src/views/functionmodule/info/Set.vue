<template>
  <div class="set">
    <Header goback="true" :msg="msg" serve="true" />
    <div class="be-careful">{{careful}}</div>
    <div class="phone" v-if="type=='phone'">
      <span>手机号码</span>
      <div class="form-input">
        <van-field v-model="phone" placeholder="手机号码" type="number" />
      </div>
    </div>
    <div class="name" v-if="type=='name'">
      <span>真实姓名</span>
      <div class="form-input">
        <van-field v-model="name" placeholder="真实姓名" />
      </div>
    </div>
    <button>确认绑定</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "Set",
  components: {
    Header
  },
  data() {
    return {
      msg: "",
      type: "",
      careful: "",
      phone: "",
      name: ""
    };
  },
  computed: {
    ...mapState({
      name: state => state.name
    })
  },
  methods: {
    ...mapActions(["runName"])
  },
  mounted() {
    let type = this.$route.params.type;
    this.type = type;
    switch (type) {
      case "phone":
        this.msg = "绑定手机号";
        this.careful = "请填写本人手机号，绑定后如需修改需要联系客服修改";
        break;
      case "name":
        this.msg = "绑定真实名";
        this.careful = "请填写本人真实名，绑定后如需修改需要联系客服修改";
        break;
    }
  }
};
</script>
<style lang="less">
.set {
  .be-careful {
    width: 100%;
    height: 0.68rem;
    background: rgba(245, 245, 245, 1);
    padding: 0.17rem 0.28rem;
    align-items: center;
  }
  .phone,
  .name {
    height: 0.88rem;
    padding-left: 0.3rem;
    align-items: center;
    display: flex;
    background: rgba(255, 255, 255, 1);
    .form-input {
      width: 80%;
    }
  }
  button {
    justify-content: center;
    margin-top: 0.8rem;
    width: 5.8rem;
    height: 0.88rem;
    background: @primary;
    border-radius: 0.1rem;
    font-size: 0.3rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
}
</style>