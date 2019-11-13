<template>
  <div class="room-list">
    <Header goback="true" msg="房间列表" serve="true" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "RoomList",
  components: {
    Header
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
</style>