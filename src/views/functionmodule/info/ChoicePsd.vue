<template>
  <div class="choice-psd">
    <Header goback="true" msg="修改登录密码" serve="true" />
    <div class="be-careful">温馨提示：定期修改，有助于保护您的账户安全！</div>
    <ul>
      <li>
        <i class="form-psd"></i>
        <div class="psd">
          <van-field v-model="old_psd" placeholder="请输入原始登录密码" type="password" />
        </div>
      </li>
      <li class="have-margin have-bottom">
        <i class="form-psd"></i>
        <div class="psd">
          <van-field v-model="psd" placeholder="请输入新登录密码" type="password" />
        </div>
      </li>
      <li class="have-bottom">
        <i class="form-psd"></i>
        <div class="psd">
          <van-field v-model="psd_two" placeholder="请确认登录密码" type="password" />
        </div>
      </li>
    </ul>
    <button>确认修改</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "ChoicePsd",
  components: {
    Header
  },
  data() {
    return {
      old_psd: "",
      psd: "",
      psd_two: ""
    };
  },
  computed: {
    ...mapState({
      //   name:state=>state.name
    })
  },
  methods: {
    ...mapActions(["runName"])
  }
};
</script>
<style lang="less">
.choice-psd {
  .be-careful {
    width: 100%;
    height: 0.68rem;
    background: rgba(245, 245, 245, 1);
    padding: 0.17rem 0.28rem;
    align-items: center;
  }
  ul {
    li {
      height: 0.88rem;
      background: #ffffff;
      padding-left: 0.38rem;
      align-items: center;
      display: flex;
      &.have-bottom {
        border-bottom: 2px solid rgba(245, 245, 245, 1);
      }
      &.have-margin {
        margin-top: 0.16rem;
      }
      .psd {
        width: 100%;
        .van-cell {
          padding: 0 0.4rem;
        }
      }
    }
  }
  button {
    font-size: 0.3rem;
    margin-top: 0.8rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    width: 5.8rem;
    height: 0.88rem;
    background: @primary;
    border-radius: 0.1rem;
  }
}
</style>