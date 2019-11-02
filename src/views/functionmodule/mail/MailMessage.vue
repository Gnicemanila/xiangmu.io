<template>
  <div class="mail-message">
    <Header goback="true" :msg="msg" serve="true" />
    <div class="mail-message-head">
      <p class="name">{{msg}}</p>
      <p class="time">2019-01-01 00:00:00</p>
    </div>
    <div class="mail-message-content">
      <p>
        尊敬的用户恭喜你，你成为大V【会员】
        由于你已经多次举办活动系统已为你自动升级成为大V
      </p>
      <p>
        尊敬的用户恭喜你，你成为大V【会员】
        由于你已经多次举办活动系统已为你自动升级成为大V
      </p>
      <p>
        尊敬的用户恭喜你，你成为大V【会员】
        由于你已经多次举办活动系统已为你自动升级成为大V
      </p>
      <p>
        尊敬的用户恭喜你，你成为大V【会员】
        由于你已经多次举办活动系统已为你自动升级成为大V
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "MailMessage",
  components: {
    Header
  },
  data() {
    return {
      msg: "站内信标题"
    };
  },
  computed: {
    ...mapState({
      name: state => state.name
    })
  },
  methods: {
    ...mapActions(["runName"])
  }
};
</script>
<style lang="less">
.mail-message {
  background: #ffffff;
  &-head {
    height: 0.88rem;
    padding-left: 0.3rem;
    .name {
      font-size: 0.3rem;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      text-align: left;
    }
    .time {
      font-size: 0.24rem;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      text-align: left;
      border-bottom: 2px solid #f5f5f5;
    }
  }
  &-content {
    padding: 0.2rem 0.3rem;
    p {
      font-size: 0.26rem;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      text-align: left;
    }
  }
}
</style>