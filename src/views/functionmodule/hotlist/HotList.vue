<template>
  <div class="hot-list">
    <Header goback="true" :msg="hot" serve="true" />
    <div class="search">
        <van-search placeholder="请输入搜索关键词" v-model="search" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "HotList",
  components: {
    Header
  },
  data(){
      return {
          search:"",
          placeholder:"",
          hot:""
      }
  },
  computed: {
    ...mapState({
    //   name: state => state.name
    })
  },
  created(){
    //   console.log(this.$route.params.type)
      let type = this.$route.params.type;
      switch (type){
          case '1':
              this.hot="科技榜";
              break;
                        case '2':
              this.hot="IT创业";
              break;
                        case '3':
              this.hot="汉正街淘宝";
              break;
                        case '4':
              this.hot="奇闻异事";
              break;
      }
  },
  methods: {
    ...mapActions(["runName"])
  }
};
</script>
<style lang="less">
.hot-list{

}
</style>