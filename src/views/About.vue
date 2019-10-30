<template>
  <div class="about">
    <h1>{{name}}喜欢玩王者荣耀</h1>
    <h2 @click="runName('李力宏')">下一位</h2>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'About',
  components: {
  },
  computed:{
    ...mapState({
      name:state=>state.name
    })
  },
  methods:{
    ...mapActions(['runName'])
  }
}
</script>
<style lang="less">
  
</style>