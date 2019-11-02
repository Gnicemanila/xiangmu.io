<template>
  <div class="my-say">
    <Header goback="true" msg="我的发布" serve="true" />
    <div class="head">
      <span class="picture"></span>
      <div class="content">
        <div class="name">
          彭于晏
          <b>大V</b>
        </div>
        <div class="like-fans">
          <span>粉丝N</span>
          <span>关注N</span>
        </div>
        <div class="fraction">
          <span>积分：9999</span>
          <span>金币：9999</span>
        </div>
      </div>
      <button class="btn">发布说说</button>
    </div>
    <div class="say">
      <span>今日发布</span>
      <span>历史发布</span>
      <span>
        筛选
        <i class="icon-screen"></i>
      </span>
    </div>
    <div class="say-time">
      <i class="icon-date" @click="showDate()"></i>
      <span>{{currentdate}}</span>
    </div>
    <ul class="old-say-say">
      <li>
        <Message />
      </li>
      <li>
        <Message />
      </li>
      <li>
        <Message />
      </li>
      <li>
        <Message />
      </li>
            <li>
        <Message />
      </li>
      <li>
        <Message />
      </li>
      <li>
        <Message />
      </li>
    </ul>
    <div v-if="show_date" class="date">
            <van-datetime-picker
      v-model="currentDate"
      type="date"
      @cancel="cancelXX"
      @confirm="confirmXX"
    />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
import Message from "@/components/Message.vue";
import { transDate } from "../../../api/publicFuction.js";
export default {
  name: "MySay",
  components: {
    Header,
    Message
  },
  data() {
    return {
      show_date: false,
      currentDate: new Date(),
      currentdate: transDate(new Date(), true)
    };
  },
  computed: {
    ...mapState({
      //   name: state => state.name
    })
  },
  methods: {
    ...mapActions(["runName"]),
    showDate() {
      this.show_date = !this.show_date;
    },
    cancelXX() {
      this.show_date = false;
    },
    confirmXX(date) {
      this.currentdate = transDate(date);
      this.show_date = false;
    }
  }
};
</script>
<style lang="less">
.my-say {
  background: #ffffff;
  .head {
    height: 1.98rem;
    padding: 0.26rem 0.4rem 0.52rem 0.45rem;
    display: flex;
    .picture {
      width: 1.2rem;
      height: 1.2rem;
      background: rgba(188, 188, 188, 1);
      border-radius: 50%;
    }
    .content {
      width: 4.25rem;
      padding-left: 0.24rem;
      text-align: left;
      .name {
        margin-bottom: 0.05rem;
        b {
          border-radius: 0.02rem;
          font-size: 0.3rem;
          font-weight: 500;
          color: @primary;
        }
      }
      .like-fans {
        font-size: 0.24rem;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        span {
          &:first-child {
            margin-right: 0.41rem;
          }
        }
      }
      .fraction {
        font-size: 0.22rem;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
      }
    }
    .btn {
      width: 1.2rem;
      height: 0.48rem;
      background: @primary;
      border-radius: 0.05rem;
      font-size: 0.24rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      margin-top: 0.27rem;
    }
  }
  .say {
    font-size: 0.3rem;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    border-bottom: 1px solid rgba(245, 245, 245, 1);
    align-items: center;
    padding-bottom: 0.16rem;
    span {
      display: inline-block;
      width: 30%;
    }
  }
  .say-time {
    height: 0.68rem;
    align-items: center;
    display: flex;
    padding-left: 0.3rem;
    i {
      display: inline-block;
      width: 0.38rem;
      height: 0.4rem;
      &.icon-date {
        background: url("../../../assets/imgs/personal/date.png") no-repeat;
        background-size: 100%;
      }
    }
    span {
      margin-left: 0.3rem;
    }
  }
  .old-say-say {
      background: #f5f5f5;
    li {
      border-top: 1px solid #f5f5f5;
      background: #ffffff;
      margin-top: .1rem;
    }
  }
  .date{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
  }
}
</style>