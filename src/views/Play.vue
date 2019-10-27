<template>
  <div class="play">
    <h1>{{name}}喜欢玩王者荣耀</h1>
    <h2 @click="runName('李力宏')">下一位</h2>
    <Footer message="活动"/>
  </div>
  
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Footer from '@/components/Footer';
export default {
  name: 'Play',
  components: {
    Footer
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