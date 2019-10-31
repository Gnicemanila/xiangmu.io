<template>
  <div class="set-sex">
    <Header goback="true" msg="设置性别" serve="true" />
    <div class="be-careful">性别可以随时修改</div>
    <div class="sex" @click="setSex(0)">
      <span>
        男
        <i class="icon-boy"></i>
      </span>
      <i class="icon-sure fr" v-if="sex==0"></i>
    </div>
    <div class="sex" @click="setSex(1)">
      <span>
        女
        <i class="icon-girl"></i>
      </span>
      <i class="icon-sure fr" v-if="sex==1"></i>
    </div>
    <button>确认</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "SetSex",
  components: {
    Header
  },
  data() {
    return {
      msg: "",
      type: "",
      sex: 0
    };
  },
  computed: {
    ...mapState({
      name: state => state.name
    })
  },
  methods: {
    ...mapActions(["runName"]),
    setSex(num) {
      this.sex = num;
    }
  },
  mounted() {}
};
</script>
<style lang="less">
.set-sex {
  .be-careful {
    width: 100%;
    height: 0.68rem;
    background: rgba(245, 245, 245, 1);
    padding: 0.17rem 0.28rem;
    align-items: center;
  }
  .sex {
    height: 0.88rem;
    background: rgba(255, 255, 255, 1);
    padding: 0 0.32rem;
    align-items: center;
    display: flex;
    border-bottom: 2px solid rgba(245, 245, 245, 1);
    span {
      display: block;
      width: 100%;
      text-align: left;
      i {
        margin-left: 0.3rem;
      }
    }
    i {
      display: inline-block;
      width: 0.3rem;
      height: 0.3rem;
      &.icon-boy {
        background: url("../../assets/imgs/personal/boy.png") no-repeat;
        background-size: 100%;
      }
      &.icon-girl {
        background: url("../../assets/imgs/personal/girl.png") no-repeat;
        background-size: 100%;
      }
      &.icon-sure {
        background: url("../../assets/imgs/personal/sure.png") no-repeat;
        background-size: 100%;
      }
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