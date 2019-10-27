<template>
  <div class="play">
    <Header msg="活动"  />
    <h1>{{name}}喜欢玩王者荣耀</h1>
    <h2 @click="runName('李力宏')">下一位</h2>
    <Footer message="活动"/>
  </div>
  
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Footer from '@/components/Footer';
import Header from "@/components/Header";
export default {
  name: 'Play',
  components: {
    Footer,
    Header
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