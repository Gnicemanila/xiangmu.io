<template>
  <div class="fans-and-like">
    <Header goback="true" :msg="msg" serve="true" />
    <div class="search">
      <van-search v-model="value" placeholder="搜索用户名" show-action @search="onSearch">
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <ul>
      <li class="list">
        <div class="head"></div>
        <ul class="user-info">
          <li class="user">
            <span>胡歌</span>
            <i class="icon-boy"></i>
            <span class="big">大V</span>
          </li>
          <li>
            <span class="fans text-over">粉丝999999</span>
            <span class="likes text-over">关注999999</span>
            <button class="add-likes fr">+关注</button>
          </li>
        </ul>
      </li>
      <li class="list">
        <div class="head"></div>
        <ul class="user-info">
          <li class="user">
            <span>胡歌</span>
            <i class="icon-boy"></i>
            <span class="big">大V</span>
          </li>
          <li>
            <span class="fans text-over">粉丝999999</span>
            <span class="likes text-over">关注999999</span>
            <button class="add-likes fr">+关注</button>
          </li>
        </ul>
      </li>
      <li class="list">
        <div class="head"></div>
        <ul class="user-info">
          <li class="user">
            <span>胡歌</span>
            <i class="icon-boy"></i>
            <span class="big">大V</span>
          </li>
          <li>
            <span class="fans text-over">粉丝999999</span>
            <span class="likes text-over">关注999999</span>
            <button class="add-likes fr">+关注</button>
          </li>
        </ul>
      </li>
      <li class="list">
        <div class="head"></div>
        <ul class="user-info">
          <li class="user">
            <span>胡歌</span>
            <i class="icon-boy"></i>
            <span class="big">大V</span>
          </li>
          <li>
            <span class="fans text-over">粉丝999999</span>
            <span class="likes text-over">关注999999</span>
            <button class="add-likes fr">+关注</button>
          </li>
        </ul>
      </li>
      <li class="list">
        <div class="head"></div>
        <ul class="user-info">
          <li class="user">
            <span>胡歌</span>
            <i class="icon-boy"></i>
            <span class="big">大V</span>
          </li>
          <li>
            <span class="fans text-over">粉丝999999</span>
            <span class="likes text-over">关注999999</span>
            <button class="add-likes fr">+关注</button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "FansAndLike",
  components: {
    Header
  },
  data() {
    return {
      msg: "",
      value: ""
    };
  },
  computed: {
    ...mapState({
      name: state => state.name
    })
  },
  created() {
    //   console.log(this.$route.params.type)
    let type = this.$route.params.type;
    this.type = type;
    switch (type) {
      case "fans":
        this.msg = "我的粉丝";
        break;
      case "likes":
        this.msg = "我的关注";
        break;
    }
  },
  methods: {
    ...mapActions(["runName"]),
    onSearch() {
      console.log(this.value);
    }
  }
};
</script>
<style lang="less">
.fans-and-like {
  background: #ffffff;

  ul {
    .list {
      padding: 0.4rem 0.4rem 0.39rem 0.4rem;
      height: 1.69rem;
      border-top: 1px solid rgba(245, 245, 245, 1);
      display: flex;
      align-items: center;
      .head {
        width: 0.9rem;
        height: 0.9rem;
        background: url("../../../assets/imgs/chat/huge.png") no-repeat;
        background-size: 100%;
        border-radius: 50%;
      }
      .user-info {
        height: 0.9rem;
        li {
          height: 0.45rem;
          line-height: 0.45rem;
          padding: 0 0.23rem;
          text-align: left;
          //   width: 5.6rem;
          .add-likes {
            width: 1.2rem;
            height: 0.45rem;
            background: @primary;
            border-radius: 0.05rem;
            font-size: 0.25rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
          }
          .icon-boy {
            margin: 0 0.4rem;
          }
          .big {
            color: @primary;
            font-size: 0.28rem;
            margin-right: 0.3rem;
            font-weight: 500;
          }
          .fans,
          .likes {
            display: inline-block;
            width: 2rem;
          }
        }
      }
    }
  }
}
</style>