<template>
  <div class="search">
      <div class="search-input">
            <van-search v-model="value" placeholder="搜索用户名" show-action @search="onSearch">
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Search",
  components: {
  },
  data(){
      return {
          value:""
      }
  },
  computed: {
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
.search{
    height: 1rem;
    &-input{
        position: fixed;
        height: 1rem;
        width: 100%;
    }
}
</style>