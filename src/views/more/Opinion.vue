
<template>
  <div class="opinion">
    <Header goback="true" msg="意见反馈" />
    <ul class="opinion-operation">
      <li>
        <span>我的反馈</span>
        <van-icon name="bars fr" size="25px" @click="goRouter('/myopinion')" />
      </li>
      <li>
        <span>选择反馈类型</span>
        <van-icon name="arrow-down fr" size="25px" />
      </li>
    </ul>
    <div class="content">
      <textarea v-model="message"></textarea>
    </div>
    <div class="describe">
      <span>联系方式</span>（请至少填写一种联系方式）
    </div>
    <ul class="contact">
      <li class="have-top">
        <van-field v-model="phone" placeholder="请输入手机号" />
      </li>
      <li class="have-top">
        <van-field v-model="qq" placeholder="请输入QQ号码" />
      </li>
      <li class="have-top have-bottom">
        <van-field v-model="email" placeholder="请输入邮箱地址" />
      </li>
    </ul>
    <button class="submit" @click="submitMyopinion">提交</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
import { Toast } from "vant";
export default {
  name: "Opinion",
  components: {
    Header
  },
  data() {
    return {
      message: "",
      qq: "",
      email: "",
      phone: ""
    };
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
    },
    submitMyopinion() {
      Toast.loading({
        message: "提交中..."
      });
    }
  }
};
</script>
<style lang="less">
.opinion {
  .opinion-operation {
    li {
      height: 0.88rem;
      background: #ffffff;
      margin-bottom: 0.16rem;
      padding: 0 0.3rem;
      align-items: center;
      display: flex;
      span {
        font-size: 0.3rem;
        width: 100%;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        text-align: left;
      }
    }
  }
  .content {
    height: 3.6rem;
    background: #ffffff;
    padding: 0.3rem 0.45rem;
    textarea {
      width: 6.6rem;
      height: 3rem;
      border: 1px solid rgba(215, 215, 215, 1);
      padding: 0.3rem;
    }
  }
  .describe {
    padding: 0 0.3rem 0.14rem 0.3rem;
    background: #fff;
    text-align: left;
    span {
      font-size: 0.3rem;
      color: rgba(51, 51, 51, 1);
    }
    font-size: 0.24rem;
    color: #666666;
    font-weight: 500;
  }
  .contact {
    li {
      height: 0.88rem;
      background: #ffffff;
      &.have-top {
        border-top: 1px solid rgba(245, 245, 245, 1);
      }
      &.have-bottom {
        border-bottom: 1px solid rgba(245, 245, 245, 1);
      }
      .van-cell {
        padding: 0.14rem 0.6rem;
      }
    }
  }
  .submit {
    background-color: @primary;
    width: 5.8rem;
    height: 0.86rem;
    border-radius: 0.05rem;
    margin: 0.72rem auto;
    font-size: 0.3rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
}
</style>