<template>
  <div class="room-list">
    <Header goback="true" msg="房间列表" serve="true" />
    <Search  :onSearch="onSearch" :_this="this"/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
import Search from "@/components/Search";
export default {
  name: "RoomList",
  components: {
    Header,
    Search
  },
  computed: {
    ...mapState({
      name: state => state.name
    })
  },
  methods: {
    ...mapActions(["runName"]),
    onSearch(item){
      console.log(item)
    }
  }
};
</script>
<style lang="less">
.room-list{

}
</style>