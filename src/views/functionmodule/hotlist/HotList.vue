<template>
  <div class="hot-list">
    <Header goback="true" :msg="hot" serve="true" />
    <Search/>
    <ul>
      <li class="list">
        <i class="icon-one"></i>
        <span class="head"></span>
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
        <i class="icon-two"></i>
        <span class="head"></span>
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
        <i class="icon-three"></i>
        <span class="head"></span>
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
        <i></i>
        <span class="head"></span>
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
import Search from "@/components/Search";
export default {
  name: "HotList",
  components: {
    Header,
    Search
  },
  data() {
    return {
      placeholder: "",
      hot: ""
    };
  },
  computed: {
    ...mapState({
      //   name: state => state.name
    })
  },
  created() {
    //   console.log(this.$route.params.type)
    let type = this.$route.params.type;
    switch (type) {
      case "1":
        this.hot = "科技榜";
        break;
      case "2":
        this.hot = "IT创业";
        break;
      case "3":
        this.hot = "汉正街淘宝";
        break;
      case "4":
        this.hot = "奇闻异事";
        break;
    }
  },
  methods: {
    ...mapActions(["runName"]),
  }
};
</script>
<style lang="less">
.hot-list {
  .list {
    height: 1.6rem;
    display: flex;
    align-items: center;
    background: #ffffff;
    padding: 0 0.3rem;
    border-top: 1px solid #f5f5f5;
    i {
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      &.icon-one {
        background: url("../../../assets/imgs/hot/one.png") no-repeat;
        background-size: 100%;
      }
      &.icon-two {
        background: url("../../../assets/imgs/hot/two.png") no-repeat;
        background-size: 100%;
      }
      &.icon-three {
        background: url("../../../assets/imgs/hot/three.png") no-repeat;
        background-size: 100%;
      }
    }
    .head {
      width: 0.9rem;
      height: 0.9rem;
      background: url("../../../assets/imgs/chat/huge.png") no-repeat;
      background-size: 100%;
      border-radius: 50%;
      margin: 0 0.21rem;
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
          width: 1.7rem;
        }
      }
    }
  }
}
</style>