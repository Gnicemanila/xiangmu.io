<template>
    <ul class="fans-like">
      <li class="like" @click="goNext('/fansAndLike/likes')">
        <i class="icon-like fl"></i>
        <span class="name fl">我的关注</span>
        <i class="icon-next fr"></i>
         <div class="fans-all fr">
          <i class="icon-fans-ico fr"></i>
          <i class="icon-fans-ico fr"></i>
          <i class="icon-fans-ico fr"></i>
          <i class="icon-fans-ico fr"></i>
          <i class="icon-fans-ico fr"></i>
          <i class="icon-fans-ico fr"></i>
        </div>
      </li>
      <li class="fans"  @click="goNext('/fansAndLike/fans')">
        <i class="icon-fans fl"></i>
        <span class="name fl">我的粉丝</span>
        <i class="icon-next fr"></i>
        <div class="fans-all fr">
          <i class="icon-fans-ico fr"></i>
          <i class="icon-fans-ico fr"></i>
          <i class="icon-fans-ico fr"></i>
          <i class="icon-fans-ico fr"></i>
          <i class="icon-fans-ico fr"></i>
          <i class="icon-fans-ico fr"></i>
        </div>
      </li>
    </ul>
</template>

<script>
export default {
  name: "FansLike",
  methods: {
    goNext(path){
       this.$router.push({ path: path })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .fans-like {
    height: 1.82rem;
    padding: 0 0.3rem;
    background: #ffffff;
    li {
       height: 0.9rem;
        justify-content: center;
        .icon-next{
          margin: .3rem 0;
        }
        .fans-all{
          display: inline-block;
          padding-top: .2rem; 
          width: 4rem;
        }
        .icon-like,.icon-fans{
          margin-top:.25rem; 
        }
      .name {
        font-size: 0.3rem;
        font-weight: 500;
        color: rgba(64, 64, 64, 1);
        margin: 0.3rem 0 0 0.23rem;
      }
    }
    .like {
      height: 0.92rem;
      border-bottom: 2px solid rgba(245, 245, 245, 1);
    }
  }
</style>
