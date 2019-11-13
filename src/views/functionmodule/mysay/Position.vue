<template>
  <div class="position">
    <Header lefttext="取消" msg="所在位置" righttext="完成" />
    <Search placeholder="搜索附近位置" :onSearch="onSearch" :_this="this" />
    <div class="position-not" @click="showPosition" v-if="show">
      <span>不显示位置</span>
      <i class="icon-sure" v-if="show"></i>
    </div>
    <div
      class="position-longtitude-latitude"
      v-if="show"
    >{{queryData?`当前位置的经度 ${queryData.longtitude} 纬度 ${queryData.latitude}`:"请打开定位才能获取当前经纬度"}}</div>
    <ul class="position-now" v-if="!show">
      <li>显示位置</li>
      <li>武汉机场</li>
      <li>武商量贩</li>
      <li>江汉路</li>
      <li>青山区</li>
      <li>洪山区</li>
      <li>东西湖区</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Search from "@/components/Search.vue";
import { getPosition } from "../../../api/publicFuction";
import Header from "@/components/Header";
export default {
  name: "Position",
  components: {
    Header,
    Search
  },
  data() {
    return {
      show: true,
      queryData: {}
    };
  },
  computed: {
    ...mapState({
      //   name: state => state.name
    })
  },
  created() {
    // 获取当前经纬度坐标
    getPosition()
      .then(result => {
        // 返回结果示例：
        // {latitude: 30.318030999999998, longitude: 120.05561639999999}
        // 一般小数点后只取六位，所以用以下代码搞定
        this.queryData = {
          longtitude: String(result.longitude).match(/\d+\.\d{0,6}/)[0],
          latitude: String(result.latitude).match(/\d+\.\d{0,6}/)[0],
          channelType: "00"
        };
        console.log(this.queryData);
        // 以下放置获取坐标后你要执行的代码:
        // ...
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    // ...mapActions(["runName"])
    goBack(path) {
      path ? this.$router.push({ path: path }) : this.$router.history.go(-1);
    },
    showPosition() {
      this.show = !this.show;
    },
    onSearch(item) {
      console.log(item);
    }
  }
};
</script>
<style lang="less">
.position {
  &-not {
    width: 100%;
    height: 0.8rem;
    background: rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;
    margin-top: 0.3rem;
    padding: 0 0.21rem;
    span {
      font-size: 0.28rem;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      text-align: left;
      width: 100%;
    }
    .icon-sure {
      display: inline-block;
      width: 0.36rem;
      height: 0.36rem;
      background: url("../../../assets/imgs/personal/position_sure.png")
        no-repeat;
      background-size: 100%;
    }
  }
  &-longtitude-latitude {
    height: 0.9rem;
    padding: 0 0.32rem;
    align-items: center;
    display: flex;
    background: #fff;
    margin-top: 0.15rem;
  }
  &-now {
    margin-top: 0.15rem;
    li {
      height: 0.9rem;
      padding: 0 0.32rem;
      align-items: center;
      display: flex;
      background: #fff;
      border-bottom: 1px solid #f5f5f5;
    }
  }
}
</style>