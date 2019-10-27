<template>
  <div class="chat">
    <h1>{{name}}喜欢玩王者荣耀</h1>
    <h2 @click="runName('李力宏')">下一位</h2>
    <Footer message="聊天室"/>
  </div>
  
</template>

<script>
import Footer from '@/components/Footer';
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Chat',
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