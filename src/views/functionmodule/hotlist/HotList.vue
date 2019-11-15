<template>
  <div class="hot-list">
    <Header goback="true" :msg="hot" serve="true" />
    <Search :placeholder="placeholder" :onSearch="onSearch" :_this="this" />
    <van-loading size="24px" vertical v-if="loading">加载中...</van-loading>
   <ul v-if="type==1" class="video-list">
        <li v-for="(item,i) in video_list" :key="i">
          <div>
            {{item.text}}
          </div>
          <video :src="item.video" controls loop></video>
        </li>
    </ul>
    <ul v-if="type==2&&music.length==0" class="music">
      <li v-for="(item,i) in music_list" :key="i">
        <img :src="item.pic_s192" alt />
        <div class="name">
          <h3 :style="{'color':item.color}">{{item.name}}</h3>
          <div class="miaoshu">
            <div v-for="(m,j) in item.content" :key="j" class="item">
              <span class="text-over">{{m.album_title}}</span>
              <span class="text-over">{{m.author}}</span>
            </div>
          </div>
        </div>

        <!-- {{item}}  -->
      </li>
    </ul>
    <ul v-if="type==3" class="hot-list">
        <li v-for="(item,i) in hot_list" :key="i" @click="goNext(item)">
          <img :src="item.image" alt="">
          <div class="info">
            <div class="title"> {{item.title}}</div>
            <div class="time">{{item.passtime}}</div>
          </div>
        </li>
    </ul>
    <ul v-if="music.length>0" class="search-music">
      <li v-for="(item,i) in music" :key="i" class="list">
        <img :src="item.pic" alt />
        <div class="info">
          <div class="author">{{item.author}}</div>
          <div>{{item.title}}</div>
          <audio :src="item.url" controls loop></audio>
        </div>
      </li>
    </ul>
    <ul v-if="type==4">
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
            <button class="add-likes fr">相互关注</button>
          </li>
        </ul>
      </li>
      <li class="list">
        <i class="icon-two"></i>
        <span class="head"></span>
        <ul class="user-info">
          <li class="user">
            <span>彭于晏</span>
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
            <span>明楼</span>
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
            <span>谢霆锋</span>
            <i class="icon-boy"></i>
            <span class="big">大V</span>
          </li>
          <li>
            <span class="fans text-over">粉丝999999</span>
            <span class="likes text-over">关注999999</span>
            <button class="add-likes fr">已关注</button>
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
import { Loading } from "vant";
export default {
  name: "HotList",
  components: {
    Header,
    Search
  },
  data() {
    return {
      placeholder: "",
      hot: "",
      music_list: [], //热门榜单
      music: [] ,//歌曲
      video_list:[],//
      hot_list:[],//热搜
      loading:true,//加载
    };
  },
  computed: {
    ...mapState({
      //   name: state => state.name
    })
  },
  created() {
    let type = this.$route.params.type;
    this.type = type;
    switch (type) {
      case "1":
        this.hot = "视频榜";
        this.placeholder = "暂时没有对应的视频搜索接口";
        this.$http("/getJoke?page=2&count=30").then(res => {
          if (res.code == 200) {
            this.video_list = res.result;
            this.loading=false
          }
        });
        break;
      case "2":
        this.hot = "音乐榜单";
        this.placeholder = "搜索歌曲名播放音乐";
        this.$http("/musicRankings").then(res => {
          if (res.code == 200) {
            this.music_list = res.result;
            this.loading=false
          }
        });
        break;
      case "3":
        this.hot = "热搜榜单";
        this.placeholder = "暂时没有对应的热搜榜单搜索接口";
        this.$http("/getWangYiNews").then(res => {
          if (res.code == 200) {
            this.hot_list = res.result;
            this.loading=false
          }
        });
        break;
      case "4":
        this.hot = "网站活跃榜单";
        this.$http("/getImages",{},).then(res => {
          if (res.code == 200) {
            this.hot_list = res.result;
            this.loading=false
          }
        });
        break;
    }
  },
  methods: {
    ...mapActions(["runName"]),
    onSearch(item) {
      let type = this.$route.params.type;
      switch (type) {
        case "2":
          this.$http("/searchMusic?name=" + item).then(res => {
            if (res.code == 200) {
              this.music = res.result;
              console.log(res.result);
            }
          });
          break;
      }
    },
    goNext(item){
      window.open(item.path)
    }
  }
};
</script>
<style lang="less">
.hot-list {
  .music {
    overflow: hidden;
    li {
      display: flex;
      // align-items: center;
      padding: 0.1rem 0.3rem;
      margin: 0.1rem 0;
      background: #ffffff;
      img {
        width: 2rem;
        height: 2.4rem;
      }
      .name {
        width: 70%;
        .miaoshu {
          width: 100%;
          padding: 0 0.1rem;
          .item {
            border-bottom: 1px solid #f5f5f5;
            display: flex;
            span {
              &:first-child {
                display: inline-block;
                width: 70%;
                text-align: left;
              }
              &:last-child {
                display: inline-block;
                width: 30%;
                text-align: left;
              }
            }
          }
        }
      }
    }
  }
  .search-music {
    overflow: hidden;
    li {
      display: flex;
      // align-items: center;
      padding: 0.1rem 0.3rem;
      margin: 0.1rem 0;
      background: #ffffff;
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
      .info {
        padding: 0 0.3rem;
        .author {
        }
        audio {
          width: 5rem;
          height: 0.5rem;
        }
      }
    }
  }
  .video-list{
    background: #f5f5f5;
    li{
      padding: .1rem .3rem;
      margin: .1rem 0;
      background: #fff;
      video{
        width: 100%;
        height: 3rem;
      }
    }
  }
  .hot-list{
    background: #f5f5f5;
    li{
      padding: .1rem .3rem;
      margin: .3rem 0;
      display: flex;
          background: #fff;
      img{
        width: 2rem;
        height:  2rem;
      }
      .info{
        padding: .3rem;
        text-align: left;
        .title{

        }
      }
    }
  }
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