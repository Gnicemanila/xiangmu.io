<template>
  <div class="chat">

  </div>
  
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Chat',
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