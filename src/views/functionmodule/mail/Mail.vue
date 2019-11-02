<template>
  <div class="mail">
    <Header goback="true" msg="站内信" serve="true" />
    <ul class="mail-list">
      <li @click="goNext('/mailMessage/15')">
        <i class="icon-mail"></i>
        <span class="mail-list-title text-over">站内信标题</span>
        <span class="mail-list-time">2019-01-01</span>
        <van-icon name="arrow" size="20px" />
      </li>
      <li @click="goNext('/mailMessage/15')">
        <i class="icon-mail-active"></i>
        <span class="mail-list-title text-over">站内信标题</span>
        <span class="mail-list-time">2019-01-01</span>
        <van-icon name="arrow" size="20px" class="fr" />
      </li>
      <li @click="goNext('/mailMessage/15')">
        <i class="icon-mail-active"></i>
        <span class="mail-list-title text-over">站内信标题</span>
        <span class="mail-list-time">2019-01-01</span>
        <van-icon name="arrow" size="20px" class="fr" />
      </li>
      <li @click="goNext('/mailMessage/15')">
        <i class="icon-mail-active"></i>
        <span class="mail-list-title text-over">站内信标题</span>
        <span class="mail-list-time">2019-01-01</span>
        <van-icon name="arrow" size="20px" class="fr" />
      </li>
      <li @click="goNext('/mailMessage/15')">
        <i class="icon-mail-active"></i>
        <span class="mail-list-title text-over">站内信标题</span>
        <span class="mail-list-time">2019-01-01</span>
        <van-icon name="arrow" size="20px" class="fr" />
      </li>

      <li @click="goNext('/mailMessage/15')">
        <i class="icon-mail-active"></i>
        <span class="mail-list-title text-over">站内信标题</span>
        <span class="mail-list-time">2019-01-01</span>
        <van-icon name="arrow" size="20px" class="fr" />
      </li>
      <li @click="goNext('/mailMessage/15')">
        <i class="icon-mail-active"></i>
        <span class="mail-list-title text-over">站内信标题</span>
        <span class="mail-list-time">2019-01-01</span>
        <van-icon name="arrow" size="20px" class="fr" />
      </li>
      <li @click="goNext('/mailMessage/15')">
        <i class="icon-mail-active"></i>
        <span class="mail-list-title text-over">站内信标题</span>
        <span class="mail-list-time">2019-01-01</span>
        <van-icon name="arrow" size="20px" class="fr" />
      </li>

      <li @click="goNext('/mailMessage/15')">
        <i class="icon-mail-active"></i>
        <span class="mail-list-title text-over">站内信标题</span>
        <span class="mail-list-time">2019-01-01</span>
        <van-icon name="arrow" size="20px" class="fr" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "Mail",
  components: {
    Header
  },
  computed: {
    ...mapState({
      // name: state => state.name
    })
  },
  methods: {
    ...mapActions(["runName"]),
    goNext(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>
<style lang="less">
.mail {
  background: #ffffff;
  &-list {
    li {
      height: 0.88rem;
      padding: 0 0.3rem;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f5f5f5;
      .mail-list-title {
        display: inline-block;
        width: 4.28rem;
        text-align: left;
        margin-left: 0.13rem;
      }
      .mail-list-time {
        display: inline-block;
        margin-left: 0.1rem;
        width: 2rem;
      }
      .icon-mail {
        display: inline-block;
        width: 0.48rem;
        height: 0.48rem;
        background: url("../../../assets/imgs/personal/mail.png") no-repeat;
        background-size: 100%;
      }
      .icon-mail-active {
        display: inline-block;
        width: 0.54rem;
        height: 0.54rem;
        background: url("../../../assets/imgs/personal/mail_active.png")
          no-repeat;
        background-size: 100%;
      }
    }
  }
}
</style>