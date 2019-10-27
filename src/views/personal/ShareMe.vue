<template>
  <div class="share-me">
    <Header goback="true" msg="分享本站" />
    <div class="picture"></div>
    <p class="web-info">您可以扫描二维码或输入下方网址</p>
    <p class="web-site">www.xxxxxx.com</p>
    <p class="share">分享到</p>
    <ul>
        <li>
            朋友圈
        </li>
        <li>微信</li>
        <li>QQ</li>
        <li>短息</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "shareMe",
  components: {
    Header
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less">
.share-me {
  background: #ffffff;
  .picture {
    width: 1.76rem;
    height: 1.76rem;
    margin: 1.49rem 2.87rem 0.67rem 2.87rem;
    background: #ddd;
  }
  .web-site ,.web-info,.share{
    font-size: 0.3rem;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    align-items: center;
  }
  .web-info{
      height:.28rem;
  }
  .web-site{
      margin-top: .29rem;
      height: .17rem;
  }
  .share{
      margin-top: 4.96rem;
  }
  ul{
      margin-top: .3rem;
      border-top: 2px solid rgba(215,215,215,1);
      background:rgba(255,255,255,1);
      display: flex;
      height: 1.81rem;
      li{
          width: 25%;
          justify-content: center;
          align-items: center;
      }
  }
}
</style>